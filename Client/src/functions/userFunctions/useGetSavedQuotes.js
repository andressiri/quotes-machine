import {useContext} from 'react';
import {Context} from '../../Context.js';
import useReverseSavedQuotesArray from './useReverseSavedQuotesArray.js';

function useGetSavedQuotes () {
  const {quote, force} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const reverseSavedQuotesArray = useReverseSavedQuotesArray();
    
  const getSavedQuotes = async () => {
    const response = await fetch('/users/getSavedQuotes');
    const json = await response.json();
    if (response.status === 200) {
      savedQuotesArray.current = json.quotesArray;
      const backupArrayAux = await JSON.parse(JSON.stringify(json.quotesArray));
      savedQuotesBackup.current = backupArrayAux;
      reverseSavedQuotesArray();
    };
  };
  return getSavedQuotes;
};

export default useGetSavedQuotes;