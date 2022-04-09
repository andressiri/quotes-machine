import {useContext} from 'react';
import {Context} from '../../Context.js';

function useUpdateWallQuoteState () {
  const {quote, force} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const searchArray = quote.search;
  const [forceUpdate, setForceUpdate] = force.update;

  const updateWallQuoteState = (index, value, attribute, wall) => {
    let auxObj = savedQuotesArray.current[index];
    if (wall === 'searchWall') auxObj = searchArray.current[index];
    auxObj[attribute] = value;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };
  return updateWallQuoteState;
};

export default useUpdateWallQuoteState;