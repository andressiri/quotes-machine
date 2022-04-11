import {useContext} from 'react';
import {Context} from '../../Context.js';
import useGetArrayToCheck from '../quoteFunctions/useGetArrayToCheck.js';
import useGetIndexAtBackup from '../quoteFunctions/useGetIndexAtBackup.js';

function useWallCancelEdition () {
  const {quote, refs} = useContext(Context);
  const getArrayToCheck = useGetArrayToCheck();
  const getIndexAtBackup = useGetIndexAtBackup();
  // savedWall
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const customTab = refs.customT;
   const favoriteTab = refs.favoriteT;
  // searchWall
  const searchArray = quote.search;
  const searchBackup = quote.searchBUp;
  const byQuoteTab = refs.byQTab;
  const byAuthorTab = refs.byATab;

  const wallCancelEdition = async (index, wall) => {
    const arrayToChange = getArrayToCheck(wall);
    const indexAtBackup = getIndexAtBackup(index, wall);

    if (wall === 'savedWall') {
      const auxObj = await JSON.parse(JSON.stringify(savedQuotesBackup.current[indexAtBackup]));
      savedQuotesArray.current[indexAtBackup] = auxObj;
      if (customTab.current === true || favoriteTab.current === true) arrayToChange[index] = auxObj;
    };

    if (wall === 'searchWall') {
      const auxObj = await JSON.parse(JSON.stringify(searchBackup.current[indexAtBackup]));
      searchArray.current[indexAtBackup] = auxObj;
      if (byQuoteTab.current === true || byAuthorTab.current === true) arrayToChange[index] = auxObj;
    };
  };
  return wallCancelEdition;
};

export default useWallCancelEdition;