import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import AllSavedTabBtn from './AllSavedTabBtn.js';
import CustomTabBtn from './CustomTabBtn.js';
import FavoriteTabBtn from './FavoriteTabBtn.js';
import CancelBtn from '../CancelBtn.js';
import ReverseQuotesBtn from './ReverseQuotesBtn.js';
import useIntersectionObserver from '../../functions/useIntersectionObserver.js';
import useDisplayWallsQuotes from '../../functions/DOMFunctions/useDisplayWallsQuotes.js';

function SavedWall() {
  const {colors, quote, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const savedQuotesArray = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;
  const wallItemsShowed = refs.wallItems;
  const customTab = refs.customT;
  const customQuotesArray = refs.customA;
  const favoriteTab = refs.favoriteT;
  const favoriteQuotesArray = refs.favoriteA;
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

  // Update quotes when state changes
  useEffect(() => {
    setUpdateForced(updateForced => updateForced + 1);
  }, [forceUpdate]);

  // Generate customQuotesArray or favoriteQuotesArray when needed
    useEffect(() => {
      customQuotesArray.current = savedQuotesArray.current.filter(quoteObj => {
        if (quoteObj.custom === true) return quoteObj;
        return null;
      });
      favoriteQuotesArray.current = savedQuotesArray.current.filter(quoteObj => {
        if (quoteObj.favorite === true) return quoteObj;
        return null;
      });
    }, [customTab.current, favoriteTab.current]);

  return (
    <div className={`quoteBox BG-color${imgBGColor} text-color${colorNumber}`}>
      <AllSavedTabBtn />
      <CustomTabBtn />
      <FavoriteTabBtn />
      <CancelBtn />
      <h1>This is your wall</h1>
      <ReverseQuotesBtn />
      {savedQuotesArray.current[0] === 'Empty Array'
        ? <h3>Nothing to show</h3>
        : savedQuotesArray.current[0] === 'Create userQuotes at first save'
          ? <h3>You did not save any quote yet</h3>
          : customTab.current === false && favoriteTab.current === false
            ? displayWallsQuotes(savedQuotesArray.current, wallItemsShowed.current, 'savedWall')
                .map(quote => {
                  return(quote);
                })
            : customTab.current === true
              ? displayWallsQuotes(customQuotesArray.current, wallItemsShowed.current, 'savedWall')
                  .map(quote => {
                    return(quote);
                  })
              : displayWallsQuotes(favoriteQuotesArray.current, wallItemsShowed.current, 'savedWall')
                  .map(quote => {
                    return(quote);
                  })
        }
    </div>
  );
};

export default SavedWall;

//TODO check for empty custom and favorite arrays