import React, {useContext} from 'react';
import {Context} from './../../Context.js';
import SavedQuote from './SavedQuote.js';
import WallContainer from './WallContainer.js'
import CancelBtn from '../CancelBtn.js';

function SavedWall() {
  const {colors, quote} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG; 
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved; 

  return (
    <div className={`quoteBox BG-color${imgBGColor} text-color${colorNumber}`}>
      <h1>This is your wall</h1>
      <CancelBtn />      
      {savedQuotesArray[0] === 'Create userQuotes at first save'
        ? <h3>You did not save any quote yet</h3>
        : savedQuotesArray.map((savedQ) => (
        <div key={savedQ._id}>
          <SavedQuote parentToChild={savedQ} />
          <WallContainer parentToChild={savedQ} />
        </div>
      ))}
    </div>
  );
};

export default SavedWall;