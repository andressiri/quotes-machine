import React, {useContext, useState} from "react";
import {Context} from "../../../../Context.js";
import useStopAuto from '../../../../functions/useStopAuto.js'; 
import useRedirectTo from "../../../../functions/useRedirectTo.js";
import useGetSavedQuotes from "../../../../functions/useGetSavedQuotes.js";
import useCheckLoginCondition from "../../../../functions/useCheckLoginCondition.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedWallBtn() {
  const {colors, quote} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [isLoading, setIsLoading] = useState(false);  
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();
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
      redirectTo('/wall');
    };      
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleSavedWallBtn} icon="list" />
  );
};

export default SavedWallBtn;