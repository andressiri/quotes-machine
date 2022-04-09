import {useContext} from 'react';
import {Context} from '../../Context.js';
import useGenerateSearchArray from './useGenerateSearchArray.js';
import exactResultsFirst from './exactResultsFirst.js';

function useGetSearchResults () {
  const {quote, refs, force} = useContext(Context);
  const [searchArray, setSearchArray] = quote.search;
  const [searchBackup, setSearchBackup] = quote.searchBUp;
  const searchByQuote = refs.byQuote;
  const searchByAuthor = refs.byAuthor;
  const wallItemsShowed = refs.wallItems;
  const searching = refs.searching;
  const [forceUpdate, setForceUpdate] = force.update;
  const generateSearchArray = useGenerateSearchArray();
    
  const getSearchResults = async (searchFor) => {
    if (searchFor) {
      searching.current = true;
      setForceUpdate(forceUpdate => forceUpdate + 1);
      const response = await fetch(`/quotes/getSearchResults/${searchFor}/${searchByQuote.current}/${searchByAuthor.current}`);
      const json = await response.json();
      if (json.foundMatches) {
        const organizedArray = exactResultsFirst(json.searchResults, searchFor, searchByQuote.current, searchByAuthor.current);
        const searchResults = generateSearchArray(organizedArray);
        setSearchArray(searchResults);
        const backupArrayAux = await JSON.parse(JSON.stringify(searchResults));
        setSearchBackup(backupArrayAux);
        wallItemsShowed.current = 10;
      } else {
        setSearchArray([json.message]);
      };
      searching.current = false;
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };
  return getSearchResults;
};

export default useGetSearchResults;