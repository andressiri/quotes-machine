import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGetArrayToCheck () {
  const {quote, refs} = useContext(Context);
  // savedWall
  const savedQuotesArray = quote.saved;
  const customTab = refs.customT;
  const customQuotesArray = refs.customA;
  const favoriteTab = refs.favoriteT;
  const favoriteQuotesArray = refs.favoriteA;
  // searchWall
  const searchArray = quote.search;
  const byQuoteTab = refs.byQTab;
  const byQuoteArray = refs.byQArr;
  const byAuthorTab = refs.byATab;
  const byAuthorArray = refs.byAArr;

  const getArrayToCheck = (wall) => {
    let arrayToChange = savedQuotesArray.current;
    if (wall === 'savedWall') {
      if (customTab.current === true) arrayToChange = customQuotesArray.current;
      if (favoriteTab.current === true) arrayToChange = favoriteQuotesArray.current;
    };

    if (wall === 'searchWall') {
      arrayToChange = searchArray.current;
      if (byQuoteTab.current === true) arrayToChange = byQuoteArray.current;
      if (byAuthorTab.current === true) arrayToChange = byAuthorArray.current;
    };

    return arrayToChange;
  };
  return getArrayToCheck;
};

export default useGetArrayToCheck;