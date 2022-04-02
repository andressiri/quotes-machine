import {useContext} from 'react';
import {Context} from '../../Context.js';

function useUpdateWallQuoteState () {
  const {quote, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
    
  const updateWallQuoteState = (index, value, attribute) => {
    let auxArray = savedQuotesArray;
    let auxObj = auxArray[index];
    auxObj[attribute] = value;
    auxArray[index] = auxObj;
    setSavedQuotesArray(auxArray);
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };
  return updateWallQuoteState;
};

export default useUpdateWallQuoteState;