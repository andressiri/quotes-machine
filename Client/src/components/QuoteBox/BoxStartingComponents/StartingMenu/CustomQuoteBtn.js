import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js'; 
import useRedirectTo from '../../../../functions/useRedirectTo.js';
import useCheckLoginCondition from '../../../../functions/userFunctions/useCheckLoginCondition.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function CustomQuoteBtn() {
  const {colors, quote, fade} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = fade.fadQ;
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();
  const checkLoginCondition = useCheckLoginCondition();

  async function handleCustomQuoteBtn () {
    stopAuto();
    if (checkLoginCondition()) {
      setFadeQuote('Out');
      setTimeout(() => {  // Timeout to handle transition
        setQuoteText('Create your own quote...');
        setAuthor('Andrés Siri');
        setFadeQuote('In');
      }, 250);
      redirectTo('/box/customQuote');
    }; 
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleCustomQuoteBtn}
      icon='lightbulb' />
  );
};

export default CustomQuoteBtn;