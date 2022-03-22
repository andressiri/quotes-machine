import React, {useContext, useState} from "react";
import {Context} from "../../../../Context.js";
import useRedirectTo from "../../../../functions/useRedirectTo.js";
import useStopAuto from '../../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SaveBtn() {
  const {colors, quote, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();
  const stopAuto = useStopAuto();

  async function handleSave () {
    if (isLoading) return;
    setIsLoading(true);
    stopAuto();
    if (!loggedIn) {
      setMessagesArray(['You have to be logged in to save']);
      setIsLoading(false);
      redirectTo('/box/login');
    } else if (!verified) {
      setMessagesArray(['You should verify your email to save']);
      setIsLoading(false);
      redirectTo('/box/verifyEmail');
    } else {
      const response = await fetch('/users/saveQuote', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          content: quoteText,
          author: author
        }),
      });
      let json = await response.json();
      setMessagesArray(json.message);
      setIsLoading(false);
      redirectTo('/box/edit');
    };   
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleSave} icon="save" />
  );
};

export default SaveBtn;