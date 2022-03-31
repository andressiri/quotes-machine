import {useContext} from 'react';
import {Context} from '../../Context.js';

function useCancelEdition () {
  const {quote, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
  const [forceUpdate, setForceUpdate] = force.update; 
    
  const cancelEdition = async function configReset (index) {
    let auxObj = await JSON.parse(JSON.stringify(savedQuotesBackup[index]));
    const auxArray = await JSON.parse(JSON.stringify(savedQuotesArray));
    auxArray[index] = auxObj;
    setSavedQuotesArray(auxArray);
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };  
  return cancelEdition;
};

export default useCancelEdition;