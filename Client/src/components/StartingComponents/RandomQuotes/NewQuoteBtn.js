import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';
import useNewQuote from '../../../functions/useNewQuote.js';
import './../../../styles/NewQuoteButton.scss';

function NewQuoteBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [isLoading, setIsLoading] = useState(false);
  const stopAuto = useStopAuto();
  const newQuote = useNewQuote();

  async function handleNewQuote() {    
    if (isLoading) return;
    setIsLoading(true);
    stopAuto();    
    newQuote();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  };

  return (
    <button className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleNewQuote} id="new-quote">New quote</button>
  );
};

export default NewQuoteBtn;