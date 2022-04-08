import {useContext} from 'react';
import {Context} from '../../Context.js';
import useGenerateSearchArray from './useGenerateSearchArray.js';
import exactResultsFirst from './exactResultsFirst.js';

function useGetSearchResults () {
  const {quote, refs, force} = useContext(Context);
  const [searchArray, setSearchArray] = quote.search;
  const [searchBackup, setSearchBackup] = quote.searchBUp;
  const [searchByQuote, setSearchByQuote] = refs.byQuote;
  const [searchByAuthor, setSearchByAuthor] = refs.byAuthor;
  const [forceUpdate, setForceUpdate] = force.update;
  const generateSearchArray = useGenerateSearchArray();
    
  const getSearchResults = async (searchFor) => {
    if (searchFor) {
      const response = await fetch(`/quotes/getSearchResults/${searchFor}/${searchByQuote.toString()}/${searchByAuthor.toString()}`);
      const json = await response.json();
      if (json.foundMatches) {
        const organizedArray = exactResultsFirst(json.searchResults, searchFor, searchByQuote, searchByAuthor);
        const searchResults = generateSearchArray(organizedArray);
        setSearchArray(searchResults);
        const backupArrayAux = await JSON.parse(JSON.stringify(searchResults));
        setSearchBackup(backupArrayAux);
        setForceUpdate(forceUpdate => forceUpdate + 1);
      } else {
        setSearchArray([json.message]);
      };
    };
  };
  return getSearchResults;
};

export default useGetSearchResults;