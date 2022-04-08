import {useContext} from 'react';
import {Context} from '../../Context.js';

function useUpdateWallQuoteState () {
  const {quote, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [searchArray, setSearchArray] = quote.search;
  const [forceUpdate, setForceUpdate] = force.update;
    
  const updateWallQuoteState = (index, value, attribute, wall) => {
    let auxArray = savedQuotesArray;
    if (wall === 'searchWall') auxArray = searchArray;
    let auxObj = auxArray[index];
    auxObj[attribute] = value;
    auxArray[index] = auxObj;
    setSavedQuotesArray(auxArray);
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };
  return updateWallQuoteState;
};

export default useUpdateWallQuoteState;