import React, {useContext, useState} from 'react';
import {Context} from '../../../../Context.js';
import useRedirectTo from '../../../../functions/useRedirectTo.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';
import useGetSavedQuotes from '../../../../functions/userFunctions/useGetSavedQuotes.js';
import useCheckLoginCondition from '../../../../functions/userFunctions/useCheckLoginCondition.js';
import useCreateQuoteObj from '../../../../functions/useCreateQuoteObj.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SaveBtn() {
  const {colors, quote, refs, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const savedQuotesArray = quote.saved;
  const [message, setMessage] = refs.msg;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();
  const stopAuto = useStopAuto();
  const getSavedQuotes = useGetSavedQuotes();
  const checkLoginCondition = useCheckLoginCondition();
  const createQuoteObj = useCreateQuoteObj();

  const handleSaveBtn = async () => {
    if (isLoading) return;
    stopAuto();
    if (checkLoginCondition()) {
      setIsLoading(true);
      const custom = gallArray[gallChoose].custom;
      const quoteObj = createQuoteObj(custom);
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
      getSavedQuotes();
      setMessage(json.message);
      setIsLoading(false);
      redirectTo('/box/message');
    };
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSaveBtn}
      icon='save' />
  );
};

export default SaveBtn;