import React, {useContext} from 'react';
import {Context} from './Context.js';
import {Routes, Route} from 'react-router-dom';
import QuoteBox from './Components/QuoteBox/QuoteBox.js';
import WallDisplay from './Components/WallsComponents/WallDisplay.js';

function AppRouter() {
  const {colors, quote, refs, fade} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [fadeWall, setFadeWall] = fade.fadW;
  // Saved wall
  const savedQuotesArray = quote.saved;
  const quotesArrDontExists = refs.arrExists;
  const customTab = refs.customT;
  const customQuotesArray = refs.customA;
  const favoriteTab = refs.favoriteT;
  const favoriteQuotesArray = refs.favoriteA;
  const savedWall = {
    wall: 'savedWall',
    mainArray: savedQuotesArray.current,
    mainArrayExists: quotesArrDontExists.current,
    dontExistsMsg: 'No quotes saved to show',
    allTabBtnText: 'All saved',
    firstTab: customTab,
    firstTabArray: customQuotesArray,
    firstTabCondition: 'custom',
    firstTabBtnText: 'Custom',
    secondTab: favoriteTab,
    secondTabArray: favoriteQuotesArray,
    secondTabCondition: 'favorite',
    secondTabBtnText: 'Favorite'
  };
  // Search wall
  const searchArray = quote.search;
  const searching = refs.searching;
  const byQuoteTab = refs.byQTab;
  const byQuoteArray = refs.byQArr;
  const byAuthorTab = refs.byATab;
  const byAuthorArray = refs.byAArr;
  const searchWall = {
    wall: 'searchWall',
    mainArray: searchArray.current,
    mainArrayExists: searching.current,
    dontExistsMsg: 'Searching...',
    allTabBtnText: 'All matches',
    firstTab: byQuoteTab,
    firstTabArray: byQuoteArray,
    firstTabCondition: 'byQuote',
    firstTabBtnText: 'By quote',
    secondTab: byAuthorTab,
    secondTabArray: byAuthorArray,
    secondTabCondition: 'byAuthor',
    secondTabBtnText: 'By author'
  };

  return (
    <div className={`App fadeWall${fadeWall}`}>
      <div className={`BG-color${colorNumber}`}>
        <Routes>
          <Route path='/box/*' exact element={<QuoteBox />} />
          <Route path='/savedWall/*' exact element={<WallDisplay parentToChild={savedWall} />} />
          <Route path='/searchWall/*' exact element={<WallDisplay parentToChild={searchWall} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;