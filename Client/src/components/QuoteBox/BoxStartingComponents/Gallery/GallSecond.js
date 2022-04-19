import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';

function GallSecond () {
  const {colors, quote, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [author, setAuthor] = quote.auth;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let chooseSecond = '';
  let disableSecond = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 2) {
    disableSecond = '';
  };

  if (gallChoose === 1) {
    chooseSecond = 'Chosen';
  };
  
  const handleGallSecond = () => {
    stopAuto(); 
    setGallChoose(1);
    setQuoteText(gallArray[1].text);
    setAuthor(gallArray[1].author);
  };

  return (
    <p
      className={`BG-color${colorNumber} gallBtn${chooseSecond} ${disableSecond}`}
      onClick={handleGallSecond} />
  );
};

export default GallSecond;