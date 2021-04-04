import React, {useState, useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';
import './../styles/RandomColor.scss';
import './../styles/AutoBtn.css'

function AutoBtn () {
  const {colorNum, quote, auth, auto, aClass, aTime} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;
  const [autoTime, setAutoTime] = aTime;

  async function startAuto(){    
    setColorNumber(randomDifNum(colorNumber)); 
    let quoteAuto = await fetchRandomQuote();
    setQuoteText(quoteAuto.content);
    setAuthor(quoteAuto.author);
  }
  function handleAutoBtn() {
    if (handleAuto !== 'Interval is off') {
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');
      setAutoClass('autoBtn btnOff BG-color'); 
    } else {
      setAutoClass('autoBtn btnOn text-color') 
      startAuto();    
      setHandleAuto(setInterval(startAuto, autoTime));
    }
  };

  return (
    <button id="autoBtn" onClick={handleAutoBtn} className={`${autoClass}${colorNumber}`}>Auto</button>
  );
}

export default AutoBtn;