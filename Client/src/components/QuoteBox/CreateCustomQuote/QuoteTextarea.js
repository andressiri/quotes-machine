import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function QuoteTextarea () {
  const {colors, quote, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [customQuoteValue, setCustomQuoteValue] = forms.customQ;

  return (
    <textarea
      placeholder='Quote...'
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onChange={(event) => {setCustomQuoteValue(event.target.value); setQuoteText(event.target.value);}}
    />
  );
};

export default QuoteTextarea;