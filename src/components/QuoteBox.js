import React from 'react';
import Quote from './Quote.js';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';
import AutoBtn from './AutoBtn.js';
import SetAutoTimeBtn from './SetAutoTimeBtn.js'
import NewQuoteBtn from './NewQuoteBtn.js';
import './../styles/QuoteBox.scss';

function QuoteBox() {  
  return (
    <div id="quote-box" className={`quoteBox`}>
      <Quote />
      <CopyToClipboardBtn />
      <TumblrBtn />
      <TwitterBtn />
      <AutoBtn />
      <SetAutoTimeBtn />
      <NewQuoteBtn />
    </div>
  );
}

export default QuoteBox;