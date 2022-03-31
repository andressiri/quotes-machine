import React, {useContext, useState} from "react";
import {Context} from "../../../../Context.js";
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js'; 
import useRedirectToWall from "../../../../functions/useRedirectToWall.js";
import useGetSavedQuotes from "../../../../functions/userFunctions/useGetSavedQuotes.js";
import useCheckLoginCondition from "../../../../functions/userFunctions/useCheckLoginCondition.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedWallBtn() {
  const {colors, quote} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [isLoading, setIsLoading] = useState(false);  
  const stopAuto = useStopAuto();
  const redirectToWall = useRedirectToWall();
  const getSavedQuotes = useGetSavedQuotes();
  const checkLoginCondition = useCheckLoginCondition();

  async function handleSavedWallBtn () {
    if (isLoading) return;
    stopAuto();
    if (checkLoginCondition()) {
      setIsLoading(true);
      // check it was not loaded before
      if (savedQuotesArray[0] === 'Empty Array') {
        getSavedQuotes();        
      };
      setIsLoading(false);
      redirectToWall('/wall');
    };      
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSavedWallBtn}
      icon="list" />
  );
};

export default SavedWallBtn;