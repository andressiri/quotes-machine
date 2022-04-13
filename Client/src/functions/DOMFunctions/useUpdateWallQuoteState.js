import {useContext} from 'react';
import {Context} from '../../Context.js';

function useUpdateWallQuoteState () {
  const {quote, refs, force} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const searchArray = quote.search;
  const byQuoteTab = refs.byQTab;
  const byQuoteArray = refs.byQArr;
  const byAuthorTab = refs.byATab;
  const byAuthorArray = refs.byAArr;
  const customTab = refs.customT;
  const customQuotesArray = refs.customA;
  const favoriteTab = refs.favoriteT;
  const favoriteQuotesArray = refs.favoriteA;
  const [forceUpdate, setForceUpdate] = force.update;

  const updateWallQuoteState = (index, value, attribute, wall) => {
    // ***Intended: if one of the quotes is changed at specific tabs, quote will be updated at "all quotes" array too, bacause specific arrays keep pointing to arrays they were made from.
    let auxObj = {};
    if (wall === 'wall/search') {
      auxObj = searchArray.current[index];
      if (byQuoteTab.current === true) auxObj = byQuoteArray.current[index]; // ***
      if (byAuthorTab.current === true) auxObj = byAuthorArray.current[index]; // ***
    };
    if (wall === 'wall/saved') {
      auxObj = savedQuotesArray.current[index];
      if (customTab.current === true) auxObj = customQuotesArray.current[index]; // ***
      if (favoriteTab.current === true) auxObj = favoriteQuotesArray.current[index]; // ***
    }; 
    auxObj[attribute] = value;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };
  return updateWallQuoteState;
};

export default useUpdateWallQuoteState;