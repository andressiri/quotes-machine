import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import ByQuoteTabBtn from './ByQuoteTabBtn.js';
import ByAuthorTabBtn from './ByAuthorTabBtn.js';
import SearchInput from './SearchInput.js';
import CancelBtn from '../CancelBtn.js';
import useIntersectionObserver from '../../functions/useIntersectionObserver.js';
import useDisplayWallsQuotes from '../../functions/DOMFunctions/useDisplayWallsQuotes.js';
import AllSearchedTabBtn from './AllSearchedTabBtn.js';

function SearchWall() {
  const {colors, quote, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const searchArray = quote.search;
  const searching = refs.searching;
  const wallItemsShowed = refs.wallItems;
  const byQuoteTab = refs.byQTab;
  const byQuoteArray = refs.byQArr;
  const byAuthorTab = refs.byATab;
  const byAuthorArray = refs.byAArr;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;
  const displayWallsQuotes = useDisplayWallsQuotes();

  //  Observer to handle loading
  const [observer, setObservedElements, entries] = useIntersectionObserver({
    rootMargin: '0px 0px 100px 0px',
  });
  useEffect(()=> {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        wallItemsShowed.current += 10;
        observer.unobserve(entry.target);
        setForceUpdate(forceUpdate => forceUpdate + 1);
      };
    });
  }, [entries, observer]);
  useEffect(() => {
    const quoteToObserve = document.querySelector('#quoteToObserve');
    if(quoteToObserve) setObservedElements([quoteToObserve]);
  }, [forceUpdate, setObservedElements]);

  //  Update quotes when state changes
  useEffect(() => {
    setUpdateForced(updateForced => updateForced + 1);
  }, [forceUpdate]);

  // Generate byQuoteArray or byAuthorArray when needed
  useEffect(() => {
    byQuoteArray.current = searchArray.current.filter(quoteObj => {
      if (quoteObj.byQuote) return quoteObj;
      return null;
    });
    byAuthorArray.current = searchArray.current.filter(quoteObj => {
      if (quoteObj.byAuthor) return quoteObj;
      return null;
    });
  }, [byQuoteTab.current, byAuthorTab.current]);

  return (
    <div className={`quoteBox BG-color${imgBGColor} text-color${colorNumber}`}>
      <AllSearchedTabBtn />
      <ByQuoteTabBtn />
      <ByAuthorTabBtn />
      <CancelBtn />
      <h1>What are you looking for?</h1>
      <SearchInput />
      {searching.current
        ? <h3>Searching...</h3>
        : !searchArray.current[0]._id
          ? <h3>{searchArray.current[0]}</h3>
          : byQuoteTab.current === false && byAuthorTab.current === false
            ? displayWallsQuotes(searchArray.current, wallItemsShowed.current, 'searchWall')
                .map(quote => {
                  return(quote);
                })
            : byQuoteTab.current === true
              ? displayWallsQuotes(byQuoteArray.current, wallItemsShowed.current, 'searchWall')
                  .map(quote => {
                    return(quote);
                  })
              : displayWallsQuotes(byAuthorArray.current, wallItemsShowed.current, 'searchWall')
                  .map(quote => {
                    return(quote);
                  })
      }
    </div>
  );
};

export default SearchWall;