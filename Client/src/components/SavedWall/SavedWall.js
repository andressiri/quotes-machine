import React, {useContext, useEffect} from 'react';
import {Context} from './../../Context.js';
import SavedQuote from './SavedQuote.js';
import WallContainer from './WallContainer.js'
import CancelBtn from '../CancelBtn.js';

function SavedWall() {
  const {colors, quote, fade, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG; 
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [fadeWall, setFadeWall] = fade.fadW;
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
        ? <p>Nothing to show</p>
        : savedQuotesArray[0] === 'Create userQuotes at first save'
          ? <h3>You did not save any quote yet</h3>
          : savedQuotesArray.map((savedQ, i) => (
        <div key={savedQ._id}>
          <SavedQuote parentToChild={{config: savedQ, index: i}} />
          <WallContainer key={savedQ._id} parentToChild={{config: savedQ, index: i}} />
        </div>))
      }
    </div>
  );
};

export default SavedWall;