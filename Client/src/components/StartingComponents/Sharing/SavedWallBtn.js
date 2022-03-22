import React, {useContext, useState} from "react";
import {Context} from "../../../Context.js";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import useRedirectTo from "../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedWallBtn() {
  const {colors, quote, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const [isLoading, setIsLoading] = useState(false);  
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();

  async function handleSavedWallBtn () {
    if (isLoading) return;
    setIsLoading(true);
    stopAuto();
    if (!loggedIn) {
      setMessagesArray(['You have to be logged in to see the wall']);
      setIsLoading(false);
      redirectTo('/box/login');
    } else if (!verified) {
      setMessagesArray(['You should verify your email to see the wall']);
      setIsLoading(false);
      redirectTo('/box/verifyEmail');
    } else {
      // check it was not loaded before
      if (savedQuotesArray !== []) {
        const response = await fetch('/users/getSavedQuotes');
        let json = await response.json();
        setSavedQuotesArray(json.quotesArray);
      };
      setIsLoading(false);
      redirectTo('/wall');
    };      
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleSavedWallBtn} icon="save" />
  );
};

export default SavedWallBtn;