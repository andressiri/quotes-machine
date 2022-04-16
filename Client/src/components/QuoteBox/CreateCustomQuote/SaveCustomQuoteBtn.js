import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useCreateQuoteObj from '../../../functions/useCreateQuoteObj.js';
import useGetSavedQuotes from '../../../functions/userFunctions/useGetSavedQuotes.js';
import useNewGalleryItem from '../../../functions/quoteFunctions/useNewGalleryItem.js';

function SaveCustomQuoteBtn () {
  const {colors, quote, refs, forms, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const savedQuotesArray = quote.saved;
  const [message, setMessage] = refs.msg;
  const [customQuoteValue, setCustomQuoteValue] = forms.customQ;
  const [customAuthorValue, setCustomAuthorValue] = forms.customA;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();
  const createQuoteObj = useCreateQuoteObj();
  const getSavedQuotes = useGetSavedQuotes();
  const newGalleryItem = useNewGalleryItem();

  const handleSaveCustomQuoteBtn = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (customQuoteValue === '' || customAuthorValue === '') {
      return setMessage('Please fill in all fields');
    };
    setIsLoading(true);
    const quoteObj = createQuoteObj(true);
    const response = await fetch('/api/users/quote/save', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        quoteObj: quoteObj
      }),
    });
    const json = await response.json();
    // check if it has to update the wall
    getSavedQuotes();
    setIsLoading(false);
    if (response.status === 201) {
      newGalleryItem(customQuoteValue, customAuthorValue, true);
      setGallChoose(gallArray.length - 1);
      setTimeout(() => {  // Timeout to handle transition
        setMessage(json.message);
      }, 250);
      redirectTo('/box/message');
    } else {
      setMessage(json.message);
    }
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSaveCustomQuoteBtn}
    >Save</button>
  );
};

export default SaveCustomQuoteBtn;