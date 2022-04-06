import {useState} from 'react';
import useGetSearchResults from './useGetSearchResults.js';


function useDebounceSearchResults () {
  const getSearchResults = useGetSearchResults();
  const [timeoutVar, setTimeoutVar] = useState('');

  const debounceSearch = (callback, delay = 1000) => {
    return (searchFor) => {
      clearTimeout(timeoutVar);
      setTimeoutVar(setTimeout(() => {
        console.log('debounce');
        callback(searchFor);
      }, delay));
    };
  };
    
  const debounceSearchResults = debounceSearch(searchFor => {
    getSearchResults(searchFor);
    console.log('inicio');
  }, 1000);
  return debounceSearchResults;
};

export default useDebounceSearchResults;