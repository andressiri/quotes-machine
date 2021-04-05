import React, {useState, useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';
import './../styles/RandomColor.scss';
import './../styles/NewQuoteButton.scss'

function NewQuoteBtn () {
  const {colorNum, quote, auth, auto, aClass, aTime, fad} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;
  const [fade, setFade] = fad;   

  async function HandleNewQuote() {
    setFade('Out');
    if (handleAuto !== 'Interval is off') {
      setAutoClass('autoBtn btnOff BG-color'); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');    
    };    
    let quoteObj = await fetchRandomQuote();
    await new Promise(resolve => setTimeout(resolve, 650));
    setColorNumber(randomDifNum(colorNumber));
    setQuoteText(quoteObj.content);
    setAuthor(quoteObj.author);
    setFade('In');
  };

  useEffect(HandleNewQuote, []);
  
  return (
      <button id="new-quote" onClick={HandleNewQuote} className={`NQbtn BG-color${colorNumber}`}>New quote</button>
  );
}

export default NewQuoteBtn;