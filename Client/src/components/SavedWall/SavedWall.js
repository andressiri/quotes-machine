import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import WallQuote from '../WallsComponents/WallQuote.js';
import WallContainer from '../WallsComponents/WallContainer.js';
import CancelBtn from '../CancelBtn.js';
import WallQuoteDeleted from '../WallsComponents/Delete/WallQuoteDeleted.js';

function SavedWall() {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;
  
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
          : savedQuotesArray.map((savedQ, i) => {
            const parentToChildObj = {
              config: savedQ,
              index: i,
              wall: 'savedWall'
            };
            if (savedQ.content) { // when a quote is deleted savedQ will be an object with the id.
              return(
                <div key={savedQ._id}>
                  <WallQuote parentToChild={parentToChildObj} />
                  <WallContainer key={`2${savedQ._id}`} parentToChild={parentToChildObj} />
                </div>);
            } else {
              return(<WallQuoteDeleted key={`3${savedQ._id}`} parentToChild={parentToChildObj}/>);
            };
          })}
    </div>
  );
};

export default SavedWall;