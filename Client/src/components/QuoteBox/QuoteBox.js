import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import StartingSetRQ from './BoxStartingComponents/RandomQuotes/StartingSetRQ.js';
import Quote from './Quote.js';
import RouteContainer from './RouteContainer.js'
import CancelBtn from '../CancelBtn.js';

function QuoteBox() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG; 

  return (
    <div id="quote-box" className={`quoteBox BG-color${imgBGColor} text-color${colorNumber}`}>
      <StartingSetRQ />
      <Quote />
      <RouteContainer />
      <CancelBtn />
    </div>
  );
};

export default QuoteBox;