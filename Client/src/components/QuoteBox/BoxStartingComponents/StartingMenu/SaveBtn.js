import React, {useContext, useState} from "react";
import {Context} from "../../../../Context.js";
import useRedirectTo from "../../../../functions/useRedirectTo.js";
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';
import useGetSavedQuotes from "../../../../functions/userFunctions/useGetSavedQuotes.js"; 
import useCheckLoginCondition from "../../../../functions/userFunctions/useCheckLoginCondition.js";
import useCreateQuoteObj from "../../../../functions/useCreateQuoteObj.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SaveBtn() {
  const {colors, quote, refs, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [message, setMessage] = refs.msg;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();
  const stopAuto = useStopAuto();
  const getSavedQuotes = useGetSavedQuotes();
  const checkLoginCondition = useCheckLoginCondition();
  const createQuoteObj = useCreateQuoteObj();

  async function handleSave () {
    if (isLoading) return;
    stopAuto();
    if (checkLoginCondition()) {
      setIsLoading(true);
      const custom = gallArray[gallChoose].custom;
      const quoteObj = createQuoteObj(custom);
      const response = await fetch('/users/saveQuote', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          quoteObj: quoteObj
        }),
      });
      let json = await response.json();
      // check if it has to update the wall
      if (savedQuotesArray[0] !== 'Empty Array') {
        getSavedQuotes();        
      };
      setMessage(json.message);
      setIsLoading(false);
      redirectTo('/box/message');
    };   
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSave}
      icon="save" />
  );
};

export default SaveBtn;