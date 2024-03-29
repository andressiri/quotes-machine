import React, {useContext, useEffect, useRef} from 'react';
import {Context} from '../../Context.js';
import QuotesTabBtn from './QuotesTabBtn';
import CancelBtn from '../CancelBtn.js';
import useIntersectionObserver from '../../functions/useIntersectionObserver.js';
import displayWallsQuotes from '../../functions/DOMFunctions/displayWallsQuotes.js';
import WallElementsDiv from './WallElementsDiv.js';

function WallDisplay({parentToChild}) {
  const {colors, quote, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const wallItemsShowed = refs.wallItems;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;
  const {wall, mainArray, mainArrayExists, dontExistsMsg, allTabBtnText,
    firstTab, firstTabArray, firstTabCondition, firstTabBtnText,
    secondTab, secondTabArray, secondTabCondition, secondTabBtnText
  } = parentToChild;
  const selectedArray = useRef(mainArray);

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
  }, [forceUpdate, setObservedElements, selectedArray.current]);

  // Update quotes when state changes
  useEffect(() => {
    setUpdateForced(updateForced => updateForced + 1);
  }, [forceUpdate]);

  // Update arrays to show in each tab
  useEffect(() => {
    // update and return if mainArray does not have any quote
    selectedArray.current = mainArray;
    if (!mainArray[0]._id) return;

    // create first tab array
    firstTabArray.current = mainArray.filter(quoteObj => {
      if (quoteObj[firstTabCondition]=== true) return quoteObj;
      return null;
    });
    if (!firstTabArray.current[0]) firstTabArray.current = ['There is no quote to show here'];
    // create second tab array
    secondTabArray.current = mainArray.filter(quoteObj => {
      if (quoteObj[secondTabCondition] === true) return quoteObj;
      return null;
    });
    if (!secondTabArray.current[0]) secondTabArray.current = ['There is no quote to show here'];
    // select tab to show
    if (firstTab.current === false && secondTab.current === false) selectedArray.current = mainArray;
    if (firstTab.current === true) selectedArray.current = firstTabArray.current;
    if (secondTab.current === true) selectedArray.current = secondTabArray.current;
  }, [mainArray, firstTab.current, secondTab.current]);

  return (
    <div className={`wall BG-color${colorNumber}`}>
      <div className={`wallCancelBtn BG-color${imgBGColor} text-color${colorNumber}`}>
        <CancelBtn />
      </div>
      <div className={`wallTabsDiv text-color${colorNumber}`}>
        <QuotesTabBtn parentToChild={{selectedTab: 'all', firstTab, secondTab, btnText: allTabBtnText}} />
        <QuotesTabBtn parentToChild={{selectedTab: 'first', firstTab, secondTab, btnText: firstTabBtnText}} />
        <QuotesTabBtn parentToChild={{selectedTab: 'second', firstTab, secondTab, btnText: secondTabBtnText}} />
      </div>
      <div className={`wallBox BG-color${imgBGColor} text-color${colorNumber}`}>
        <WallElementsDiv parentToChild={{wall}} />
        {displayWallsQuotes(
          mainArrayExists,
          dontExistsMsg,
          selectedArray.current,
          wallItemsShowed.current,
          wall,
          imgBGColor,
          colorNumber
          ).map(quote => {return quote})
        }
      </div>
    </div>
  );
};

export default WallDisplay;