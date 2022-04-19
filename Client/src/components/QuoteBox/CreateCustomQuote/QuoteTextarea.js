import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function QuoteTextarea () {
  const {colors, quote, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [message, setMessage] = refs.msg;
  const [customQuoteValue, setCustomQuoteValue] = forms.customQ;

  const handleOnChange = (event) => {
    if (event.target.value.length <= event.target.attributes.maxLength.value) {
      setCustomQuoteValue(event.target.value); 
      setQuoteText(event.target.value);
      if (event.target.value.length < event.target.attributes.maxLength.value) return;
    }
    setMessage(`Max of ${event.target.attributes.maxLength.value} characters allowed for quote`);
    return false;
  };

  return (
    <textarea
      maxLength={'200'}
      placeholder='Quote...'
      className={`formBtn inputs txtArea BG-color${imgBGColor} text-color${colorNumber} scrollbar${imgBGColor} scroll${colorNumber}`}
      onChange={handleOnChange}
    />
  );
};

export default QuoteTextarea;