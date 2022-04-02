import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGetSavedQuotes () {
  const {quote} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
    
  const getSavedQuotes = async () => {
    const response = await fetch('/users/getSavedQuotes');
    let json = await response.json();
    if (json.message === 'Quotes retrieved successfully') {
      setSavedQuotesArray(json.quotesArray);
      const backupArrayAux = await JSON.parse(JSON.stringify(json.quotesArray));
      setSavedQuotesBackup(backupArrayAux);
    };
  };
  return getSavedQuotes;
};

export default useGetSavedQuotes;