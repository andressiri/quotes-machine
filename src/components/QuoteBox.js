import React, {useContext} from 'react';
import {Context} from '../Context.js';
import GroupOneRQ from './GroupOneComponents/RandomQuotes/GroupOneRQ.js';
import Quote from './Quote.js';
import GroupContainer from './GroupContainer.js'
import ShareCancel from './ShareCancel.js';
import './../styles/QuoteBox.scss';

function QuoteBox() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG; 
  
  return (
    <div id="quote-box" className={`quoteBox BG-color${imgBGColor} text-color${colorNumber}`}>
      <GroupOneRQ />
      <Quote />
      <GroupContainer />
      <ShareCancel />
    </div>
  );
};

export default QuoteBox;