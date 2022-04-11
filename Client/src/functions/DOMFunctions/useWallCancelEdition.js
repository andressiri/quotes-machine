import {useContext} from 'react';
import {Context} from '../../Context.js';

function useWallCancelEdition () {
  const {quote, refs} = useContext(Context);
  // savedWall
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const customTab = refs.customT;
  const customQuotesArray = refs.customA;
  const favoriteTab = refs.favoriteT;
  const favoriteQuotesArray = refs.favoriteA;
  // searchWall
  const searchArray = quote.search;
  const searchBackup = quote.searchBUp;
  const byQuoteTab = refs.byQTab;
  const byQuoteArray = refs.byQArr;
  const byAuthorTab = refs.byATab;
  const byAuthorArray = refs.byAArr;

  const wallCancelEdition = async (index, wall) => {
    let indexAtBackup = index;

    if (wall = 'savedWall') {
      let arrayToChange = savedQuotesArray.current;
      // check if cancel event is at custom tab
      if (customTab.current === true) {
        indexAtBackup = savedQuotesBackup.current.map(quote => {
          return quote._id;
        }).indexOf(customQuotesArray.current[index]._id);
        arrayToChange = customQuotesArray.current;
      };
      // check if cancel event is at favorite tab
      if (favoriteTab.current === true) {
        indexAtBackup = savedQuotesBackup.current.map(quote => {
          return quote._id;
        }).indexOf(favoriteQuotesArray.current[index]._id);
        arrayToChange = favoriteQuotesArray.current;
      };
      // proceed to cancel changes and reset config
      const auxObj = await JSON.parse(JSON.stringify(savedQuotesBackup.current[indexAtBackup]));
      savedQuotesArray.current[indexAtBackup] = auxObj;
      if (customTab.current === true || favoriteTab.current === true) arrayToChange[index] = auxObj;
    };

    if (wall = 'searchWall') {
      let arrayToChange = searchArray.current;
      // check if cancel event is at custom tab
      if (byQuoteTab.current === true) {
        indexAtBackup = searchBackup.current.map(quote => {
          return quote._id;
        }).indexOf(byQuoteArray.current[index]._id);
        arrayToChange = byQuoteArray.current;
      };
      // check if cancel event is at favorite tab
      if (byAuthorTab.current === true) {
        indexAtBackup = searchBackup.current.map(quote => {
          return quote._id;
        }).indexOf(byAuthorArray.current[index]._id);
        arrayToChange = byAuthorArray.current;
      };
      // proceed to cancel changes and reset config
      const auxObj = await JSON.parse(JSON.stringify(searchBackup.current[indexAtBackup]));
      searchArray.current[indexAtBackup] = auxObj;
      if (byQuoteTab.current === true || byAuthorTab.current === true) arrayToChange[index] = auxObj;
    };
  };
  return wallCancelEdition;
};

export default useWallCancelEdition;