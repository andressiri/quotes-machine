import React, {useState, useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import './../styles/RandomColor.scss';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';

function NewQuoteBtn () {
  const {colorNum, quote, auth, auto, aClass} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;    

  async function HandleNewQuote() {
    if (handleAuto !== 'First time' && handleAuto !== 'Interval is off') {
      setAutoClass('off BG-color'); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');    
    }
    setColorNumber(randomDifNum(colorNumber));
    let quoteObj = await fetchRandomQuote();
    setQuoteText(quoteObj.content);
    setAuthor(quoteObj.author);
  };

  useEffect(HandleNewQuote, []);
  
  return (
      <button id="new-quote" onClick={HandleNewQuote} className={`BG-color${colorNumber}`}>New quote</button>
  );
}

export default NewQuoteBtn;