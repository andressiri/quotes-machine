import React, {useState, useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';
import './../styles/RandomColor.scss';
import './../styles/AutoBtn.scss'

function AutoBtn () {
  const {colorNum, quote, auth, auto, aClass, aTime, fad} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;
  const [autoTime, setAutoTime] = aTime;
  const [fade, setFade] = fad;

  async function startAuto(){    
    setFade('Out');
    let quoteObj = await fetchRandomQuote();
    await new Promise(resolve => setTimeout(resolve, 650));
    setColorNumber(randomDifNum(colorNumber));
    setQuoteText(quoteObj.content);
    setAuthor(quoteObj.author);
    setFade('In');
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