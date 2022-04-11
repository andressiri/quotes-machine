import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js'; 
import useRedirectToWall from '../../../../functions/useRedirectToWall.js';
import useGetSavedQuotes from '../../../../functions/userFunctions/useGetSavedQuotes.js';
import useCheckLoginCondition from '../../../../functions/userFunctions/useCheckLoginCondition.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SavedWallBtn() {
  const {colors, quote} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const savedQuotesArray = quote.saved;
  const stopAuto = useStopAuto();
  const redirectToWall = useRedirectToWall();
  const getSavedQuotes = useGetSavedQuotes();
  const checkLoginCondition = useCheckLoginCondition();

  const handleSavedWallBtn = () => {
    stopAuto();
    if (checkLoginCondition()) {
      // check it was not loaded before
      if (!savedQuotesArray.current[0]) {
        getSavedQuotes();
      };
      redirectToWall('/savedWall');
    };
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSavedWallBtn}
      icon='list' />
  );
};

export default SavedWallBtn;