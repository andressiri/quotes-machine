import React, {useState, useContext} from 'react';
import {Context} from './../Context.js';
import './../styles/QuoteBox.css';
import './../styles/RandomColor.scss';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';
import AutoBtn from './AutoBtn.js';
import NewQuoteBtn from './NewQuoteBtn.js';

function QuoteBox() {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  
  return (
    <div id="quote-box" className={`QuoteBox`}>
      <h1 id="text" className={`text-color${colorNumber}`}>{quoteText}</h1>
      <p id="author" className={`text-color${colorNumber}`}>{author}</p>
      <TumblrBtn />
      <TwitterBtn />
      <AutoBtn />
      <NewQuoteBtn />
    </div>
  );
}

export default QuoteBox;