import {useContext} from 'react';
import {Context} from '../../Context.js';

function useSavedCancelEdition () {
  const {quote, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.savedBUp;
  const [forceUpdate, setForceUpdate] = force.update;
    
  const savedCancelEdition = async (index) => {
    let auxObj = await JSON.parse(JSON.stringify(savedQuotesBackup[index]));
    const auxArray = await JSON.parse(JSON.stringify(savedQuotesArray));
    auxArray[index] = auxObj;
    setSavedQuotesArray(auxArray);
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };
  return savedCancelEdition;
};

export default useSavedCancelEdition;