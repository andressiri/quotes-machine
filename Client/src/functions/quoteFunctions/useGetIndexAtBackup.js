import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGetIndexAtBackup () {
  const {quote, refs} = useContext(Context);
  // savedWall
  const savedQuotesBackup = quote.savedBUp;
  const customTab = refs.customT;
  const customQuotesArray = refs.customA;
  const favoriteTab = refs.favoriteT;
  const favoriteQuotesArray = refs.favoriteA;
  // searchWall
  const searchBackup = quote.searchBUp;
  const byQuoteTab = refs.byQTab;
  const byQuoteArray = refs.byQArr;
  const byAuthorTab = refs.byATab;
  const byAuthorArray = refs.byAArr;

  const getIndexAtBackup = (index, wall) => {
    let indexAtBackup = index;

    if (wall === 'savedWall') {
      // check if cancel event is at custom tab
      if (customTab.current === true) {
        indexAtBackup = savedQuotesBackup.current.map(quote => {
          return quote._id;
        }).indexOf(customQuotesArray.current[index]._id);
      };
      // check if cancel event is at favorite tab
      if (favoriteTab.current === true) {
        indexAtBackup = savedQuotesBackup.current.map(quote => {
          return quote._id;
        }).indexOf(favoriteQuotesArray.current[index]._id);
      };
    };

    if (wall === 'searchWall') {
      // check if cancel event is at custom tab
      if (byQuoteTab.current === true) {
        indexAtBackup = searchBackup.current.map(quote => {
          return quote._id;
        }).indexOf(byQuoteArray.current[index]._id);
      };
      // check if cancel event is at favorite tab
      if (byAuthorTab.current === true) {
        indexAtBackup = searchBackup.current.map(quote => {
          return quote._id;
        }).indexOf(byAuthorArray.current[index]._id);
      };
    };

    return indexAtBackup;
  };
  return getIndexAtBackup;
};

export default useGetIndexAtBackup;