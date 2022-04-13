import {useState} from 'react';
import useGetSearchResults from './useGetSearchResults.js';
import useGetSavedSearch from './useGetSavedSearch.js';

function useDebounceSearchResults () {
  const getSearchResults = useGetSearchResults();
  const getSavedSearch = useGetSavedSearch();
  const [timeoutVar, setTimeoutVar] = useState('');

  const debounceSearch = (callback, delay = 1000) => {
    return (searchFor, wall) => {
      clearTimeout(timeoutVar);
      setTimeoutVar(setTimeout(() => {
        callback(searchFor, wall);
      }, delay));
    };
  };

  const debounceSearchResults = debounceSearch((searchFor, wall) => {
    if (wall === 'wall/search') {
      getSearchResults(searchFor);
    } else {
      getSavedSearch(searchFor);
    };
  }, 1000);
  return debounceSearchResults;
};

export default useDebounceSearchResults;