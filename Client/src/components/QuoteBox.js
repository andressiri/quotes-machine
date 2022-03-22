import React, {useContext} from 'react';
import {Context} from '../Context.js';
import StartingSetRQ from './StartingComponents/RandomQuotes/StartingSetRQ.js';
import Quote from './Quote.js';
import RouteContainer from './RouteContainer.js'
import CancelBtn from './CancelBtn.js';
import './../styles/QuoteBox.scss';

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