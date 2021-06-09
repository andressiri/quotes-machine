import React from 'react';
import Quote from './Quote.js';
import ImgToClipboard from './ImgToClipboard.js';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrTxtBtn from './TumblrTxtBtn.js';
import TwitterBtn from './TwitterBtn.js';
import AutoBtn from './AutoBtn.js';
import SetAutoTimeBtn from './SetAutoTimeBtn.js';
import NewQuoteBtn from './NewQuoteBtn.js';
import TumblrImgBtn from './TumblrImgBtn.js';
import './../styles/QuoteBox.scss';

function QuoteBox() {  
  return (
    <div id="quote-box" className={`quoteBox`}>
      <Quote />      
      <ImgToClipboard />
      <CopyToClipboardBtn />
      <TumblrTxtBtn />
      <TwitterBtn />
      <AutoBtn />
      <SetAutoTimeBtn />
      <NewQuoteBtn />
      <TumblrImgBtn />
    </div>
  );
}

export default QuoteBox;