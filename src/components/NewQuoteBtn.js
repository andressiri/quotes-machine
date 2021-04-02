import React, {useState, useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import './../RandomColor.scss';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';

function NewQuoteBtn () {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
      
  function randomColor() {
    setColorNumber((prev) => prev = randomDifNum(colorNumber));     
  }

  async function randomQuote() {
    let quoteObj = await fetchRandomQuote();
    setQuoteText(quoteObj.content);
    setAuthor(quoteObj.author);
  }

  useEffect(() => randomQuote(), []);
  return (
      <button id="new-quote" onClick={function(){ randomColor(); randomQuote()}} className={`BG-color${colorNumber}`}>New quote</button>
  );
}

export default NewQuoteBtn;