import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import SearchByQuoteBtn from './SearchByQuoteBtn.js';
import SearchByAuthorBtn from './SearchByAuthorBtn.js';
import SearchInput from './SearchInput.js';
import WallQuote from '../WallsComponents/WallQuote.js';
import WallContainer from '../WallsComponents/WallContainer.js';
import CancelBtn from '../CancelBtn.js';
import WallQuoteDeleted from '../WallsComponents/Delete/WallQuoteDeleted.js';

function SearchWall() {
  const {colors, quote, forms, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [searchArray, setSearchArray] = quote.search;
  const [searchValue, setSearchValue] = forms.search;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;

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
      {searchArray[0] === 'Empty Array'
        ? <h3>Nothing to show yet</h3>
        : !searchArray[0]._id
          ? <h3>{searchArray[0]}</h3>
          : searchArray.map((searchedQ, i) => {
            let parentToChildObj = {
              config: searchedQ,
              index: i,
              wall: 'searchWall'
            };
            if (searchedQ.content) { // when a quote is deleted searchedQ will be an object with the id.
              return(
                <div key={searchedQ._id}>
                  <WallQuote key={`2${searchedQ._id}`} parentToChild={parentToChildObj} />
                  <WallContainer key={`3${searchedQ._id}`} parentToChild={parentToChildObj} />
                </div>);
            } else {
              return(<WallQuoteDeleted key={`4${searchedQ._id}`} parentToChild={parentToChildObj}/>);
            };
          })}
    </div>
  );
};

export default SearchWall;