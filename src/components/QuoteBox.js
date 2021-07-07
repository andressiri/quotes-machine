import React, {useContext} from 'react';
import {Context} from '../Context.js';
import GroupOneRQ from './GroupOneComponents/RandomQuotes/GroupOneRQ.js';
import Quote from './Quote.js';
import ShareCancel from './ShareCancel.js';
import './../styles/QuoteBox.scss';

import GroupContainer from './GroupContainer.js'

function QuoteBox() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG; 
  
  return (
    <div id="quote-box" className={`quoteBox BG-color${imgBGColor}`}>
      <GroupOneRQ />
      <Quote />     
      <GroupContainer />
      <ShareCancel />
    </div>
  );
};

export default QuoteBox;