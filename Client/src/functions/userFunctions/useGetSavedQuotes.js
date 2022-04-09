import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGetSavedQuotes () {
  const {quote, refs, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.savedBUp;
  const [forceUpdate, setForceUpdate] = force.update;
  const wallItemsShowed = refs.wallItems
    
  const getSavedQuotes = async () => {
    const response = await fetch('/users/getSavedQuotes');
    const json = await response.json();
    if (response.status === 200) {
      setSavedQuotesArray(json.quotesArray);
      const backupArrayAux = await JSON.parse(JSON.stringify(json.quotesArray));
      setSavedQuotesBackup(backupArrayAux);
      wallItemsShowed.current = 10;
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };
  return getSavedQuotes;
};

export default useGetSavedQuotes;