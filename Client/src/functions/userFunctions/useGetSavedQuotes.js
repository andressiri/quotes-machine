import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGetSavedQuotes () {
  const {quote, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.savedBUp;
  const [forceUpdate, setForceUpdate] = force.update;
    
  const getSavedQuotes = async () => {
    const response = await fetch('/users/getSavedQuotes');
    let json = await response.json();
    if (json.success) {
      setSavedQuotesArray(json.quotesArray);
      const backupArrayAux = await JSON.parse(JSON.stringify(json.quotesArray));
      setSavedQuotesBackup(backupArrayAux);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };
  return getSavedQuotes;
};

export default useGetSavedQuotes;