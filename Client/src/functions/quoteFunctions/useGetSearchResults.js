import {useContext} from 'react';
import {Context} from '../../Context.js';
import useGenerateSearchArray from './useGenerateSearchArray.js';
import exactResultsFirst from './exactResultsFirst.js';

function useGetSearchResults () {
  const {quote, refs, force} = useContext(Context);
  const searchArray = quote.search;
  const searchBackup = quote.searchBUp;
  const wallItemsShowed = refs.wallItems;
  const searching = refs.searching;
  const [forceUpdate, setForceUpdate] = force.update;
  const generateSearchArray = useGenerateSearchArray();
    
  const getSearchResults = async (searchFor) => {
    if (searchFor) {
      searching.current = true;
      setForceUpdate(forceUpdate => forceUpdate + 1);
      const response = await fetch(`/api/quotes/search/${searchFor}`);
      const json = await response.json();
      if (json.foundMatches) {
        const organizedArray = exactResultsFirst(json.searchResults, searchFor);
        const searchResults = generateSearchArray(organizedArray);
        searchArray.current = searchResults;
        searchBackup.current = await JSON.parse(JSON.stringify(searchResults));
        wallItemsShowed.current = 10;
      } else {
        searchArray.current = [json.message];
      };
      searching.current = false;
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };
  return getSearchResults;
};

export default useGetSearchResults;