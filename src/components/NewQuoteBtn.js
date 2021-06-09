import React, {useContext, useEffect} from 'react';
import {Context} from './../Context.js';
import useStopAuto from '../functions/useStopAuto.js';
import useNewQuote from '../functions/useNewQuote.js';
import './../styles/RandomColor.scss';
import './../styles/NewQuoteButton.scss';

function NewQuoteBtn () {
  const {colorNum} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum; 
  const stopAuto = useStopAuto();
  const newQuote = useNewQuote();

  async function handleNewQuote() {    
    stopAuto();    
    newQuote();
  };

  useEffect(handleNewQuote, []);
  
  return (
    <button className={`NQbtn BG-color${colorNumber}`} onClick={handleNewQuote} >New quote</button>
  );
}

export default NewQuoteBtn;