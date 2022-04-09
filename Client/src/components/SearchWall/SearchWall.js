import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import SearchByQuoteBtn from './SearchByQuoteBtn.js';
import SearchByAuthorBtn from './SearchByAuthorBtn.js';
import SearchInput from './SearchInput.js';
import WallQuote from '../WallsComponents/WallQuote.js';
import WallContainer from '../WallsComponents/WallContainer.js';
import CancelBtn from '../CancelBtn.js';
import WallQuoteDeleted from '../WallsComponents/Delete/WallQuoteDeleted.js';
import useIntersectionObserver from '../../functions/useIntersectionObserver.js';

function SearchWall() {
  const {colors, quote, refs, forms, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const searchArray = quote.search;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;
  const wallItemsShowed = refs.wallItems;
  const searching = refs.searching;

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
      <CancelBtn />
      <h1>What are you looking for?</h1>
      <div style={{display: 'flex'}} >
        <h3>Search By:</h3>
        <h4>Quote</h4>
        <SearchByQuoteBtn />
        <h4>Author</h4>
        <SearchByAuthorBtn />
      </div>
      <SearchInput />
      {searching.current
        ? <h3>Searching...</h3>
        : !searchArray.current[0]._id
          ? <h3>{searchArray.current[0]}</h3>
          : searchArray.current.slice(0, wallItemsShowed.current).map((searchedQ, i) => {
              let parentToChildObj = {
                config: searchedQ,
                index: i,
                wall: 'searchWall'
              };
              let divId = searchedQ._id;
              if (i === wallItemsShowed.current - 2) divId = 'quoteToObserve';
              if (searchedQ.content) { // when a quote is deleted searchedQ will be an object with the id.
                return(
                  <div id={divId} key={searchedQ._id}>
                    <WallQuote key={`2${searchedQ._id}`} parentToChild={parentToChildObj} />
                    <WallContainer key={`3${searchedQ._id}`} parentToChild={parentToChildObj} />
                  </div>);
              } else {
                return(<WallQuoteDeleted id={divId} key={`4${searchedQ._id}`} parentToChild={parentToChildObj}/>);
              };
          })}
    </div>
  );
};

export default SearchWall;