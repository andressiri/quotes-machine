import React, {useState, useContext} from 'react';
import './QuoteBox.css';
import {ColorContext} from './../ColorContext.js';
import './../RandomColor.css';

function QuoteBox() {
  const [colorNumber, setColorNumber] = useContext(ColorContext);
  function randomNumber() {
    setColorNumber((prev) => prev = Math.floor(Math.random() * (3 + 1)));
  }
  
  return (
    <div id="quote-box" className={`QuoteBox`}>
        <h1 id="text">Random Quote</h1>
        <p id="author">Author</p>
        <button className={`color${colorNumber}`}><a id="tweet-quote">Tweet</a></button>
        <button id="new-quote" onClick={randomNumber} className={`color${colorNumber}`}>New quote</button>        
    </div>
  );
}

export default QuoteBox;