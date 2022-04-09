import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import WallQuote from '../WallsComponents/WallQuote.js';
import WallContainer from '../WallsComponents/WallContainer.js';
import CancelBtn from '../CancelBtn.js';
import WallQuoteDeleted from '../WallsComponents/Delete/WallQuoteDeleted.js';
import useIntersectionObserver from '../../functions/useIntersectionObserver.js';

function SavedWall() {
  const {colors, quote, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;
  const wallItemsShowed = refs.wallItems;

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

  return (
    <div className={`quoteBox BG-color${imgBGColor} text-color${colorNumber}`}>
      <h1>This is your wall</h1>
      <CancelBtn />
      {savedQuotesArray[0] === 'Empty Array'
        ? <h3>Nothing to show</h3>
        : savedQuotesArray[0] === 'Create userQuotes at first save'
          ? <h3>You did not save any quote yet</h3>
          : savedQuotesArray.slice(0, wallItemsShowed.current).map((savedQ, i) => {
            const parentToChildObj = {
              config: savedQ,
              index: i,
              wall: 'savedWall'
            };
            let divId = savedQ._id;
            if (i === wallItemsShowed.current - 2) divId = 'quoteToObserve';
            if (savedQ.content) { // when a quote is deleted savedQ will be an object with the id.
              return(
                <div id={divId} key={savedQ._id}>
                  <WallQuote parentToChild={parentToChildObj} />
                  <WallContainer key={`2${savedQ._id}`} parentToChild={parentToChildObj} />
                </div>);
            } else {
              return(<WallQuoteDeleted id={divId} key={`3${savedQ._id}`} parentToChild={parentToChildObj}/>);
            };
          })}
    </div>
  );
};

export default SavedWall;