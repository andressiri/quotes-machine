import React, {useState, useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import './../RandomColor.scss';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';


function AutoBtn () {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
      
//  const auto = setInterval( function() {
//
//    console.log('zaraza');
//
//
//  }, 2000);
  function handleAutoBtn() {
    const auto = setInterval(async function() {
      console.log('sadasd');
      setColorNumber(randomDifNum(colorNumber)); 
      let quoteAuto = await fetchRandomQuote();
      setQuoteText(quoteAuto.content);
      setAuthor(quoteAuto.author);
    }, 2000);  
  };

  return (
    <button id="autoBtn" onClick={handleAutoBtn} className={`BG-color${colorNumber}`}>Auto</button>
  );
}

export default AutoBtn;