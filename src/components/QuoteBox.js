import React, {useState, useContext} from 'react';
import {Context} from './../Context.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';
import AutoBtn from './AutoBtn.js';
import SetAutoTimeBtn from './SetAutoTimeBtn.js'
import NewQuoteBtn from './NewQuoteBtn.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import './../styles/QuoteBox.css';
import './../styles/RandomColor.scss';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';

function QuoteBox() {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  
  return (
    <div id="quote-box" className={`quoteBox`}>
      <h1 id="text" className={`quote text-color${colorNumber}`}>
        <FontAwesomeIcon icon={faQuoteLeft} class={`icon text-color${colorNumber}`} />
        {quoteText}
        <FontAwesomeIcon icon={faQuoteRight} class={`icon text-color${colorNumber}`} />
      </h1>
      <p id="author" className={`text-color${colorNumber}`}>{`- ${author}`}</p>
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