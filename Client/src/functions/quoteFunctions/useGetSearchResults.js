import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGetSearchResults () {
  const {quote, refs, force} = useContext(Context);
  const [searchArray, setSearchArray] = quote.search;
  const [searchBackup, setSearchBackup] = quote.searchBUp;
  const [searchByQuote, setSearchByQuote] = refs.byQuote;
  const [searchByAuthor, setSearchByAuthor] = refs.byAuthor;
  const [forceUpdate, setForceUpdate] = force.update;
    
  const getSearchResults = async (searchFor) => {
    if (searchFor) {
      const response = await fetch(`/quotes/getSearchResults/${searchFor}/${searchByQuote.toString()}/${searchByAuthor.toString()}`);
      let json = await response.json();
      if (json.success) {
        setSearchArray(json.searchResults);
        const backupArrayAux = await JSON.parse(JSON.stringify(json.searchResults));
        setSearchBackup(backupArrayAux);
        setForceUpdate(forceUpdate => forceUpdate + 1);
      };
    };
  };
  return getSearchResults;
};

export default useGetSearchResults;