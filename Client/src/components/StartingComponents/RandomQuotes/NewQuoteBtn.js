import React, {useContext, useEffect} from 'react';
import {Context} from '../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';
import useNewQuote from '../../../functions/useNewQuote.js';
import './../../../styles/NewQuoteButton.scss';

function NewQuoteBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const stopAuto = useStopAuto();
  const newQuote = useNewQuote();

  async function handleNewQuote() {    
    stopAuto();    
    newQuote();
  };

  return (
    <button className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleNewQuote} id="new-quote">New quote</button>
  );
};

export default NewQuoteBtn;