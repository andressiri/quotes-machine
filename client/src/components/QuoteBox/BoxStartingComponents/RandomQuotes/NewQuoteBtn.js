import React, {useContext, useState} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';
import useNewQuote from '../../../../functions/quoteFunctions/useNewQuote.js';

function NewQuoteBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [isLoading, setIsLoading] = useState(false);
  const stopAuto = useStopAuto();
  const newQuote = useNewQuote();

  const handleNewQuoteBtn = () => {
    if (isLoading) return;
    setIsLoading(true);
    stopAuto();
    newQuote();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleNewQuoteBtn}
      id='new-quote'
    >New quote</button>
  );
};

export default NewQuoteBtn;