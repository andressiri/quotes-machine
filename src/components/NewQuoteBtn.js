import React, {useState, useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';
import './../styles/RandomColor.scss';
import './../styles/NewQuoteButton.css'

function NewQuoteBtn () {
  const {colorNum, quote, auth, auto, aClass} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;    

  async function HandleNewQuote() {
    if (handleAuto !== 'Interval is off') {
      setAutoClass('autoBtn btnOff BG-color'); 
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
      <button id="new-quote" onClick={HandleNewQuote} className={`NQbtn BG-color${colorNumber}`}>New quote</button>
  );
}

export default NewQuoteBtn;