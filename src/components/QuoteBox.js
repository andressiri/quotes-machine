import React, {useState, useContext} from 'react';
import {Context} from './../Context.js';
import './QuoteBox.css';
import './../RandomColor.scss';
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
      <button className={`BG-color${colorNumber}`}><a id="tweet-quote" href="youtube.com">Tweet</a></button>
      <NewQuoteBtn />
    </div>
  );
}

export default QuoteBox;