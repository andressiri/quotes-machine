import {useContext, useRef} from 'react';
import {Context} from '../../Context.js';
import savedSearch from './savedSearch.js';
import exactResultsFirst from './exactResultsFirst.js';

function useGetSavedSearch () {
  const {quote, refs, force} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedSearchBackup = quote.savedSearch;
  const wallItemsShowed = refs.wallItems;
  const [forceUpdate, setForceUpdate] = force.update;
    
  const getSavedSearch = (searchFor) => {
    if (!savedSearchBackup.current[0]) savedSearchBackup.current = savedQuotesArray.current;

    if (searchFor) {
      let resultArray = savedSearch(searchFor, savedSearchBackup.current);
      if (typeof resultArray[0] === 'object') {
        resultArray = exactResultsFirst(resultArray, searchFor);
      };  
      savedQuotesArray.current = resultArray;
    } else {
      savedQuotesArray.current = savedSearchBackup.current;
      savedSearchBackup.current = [];
    };
    wallItemsShowed.current = 10;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };
  return getSavedSearch;
};

export default useGetSavedSearch;