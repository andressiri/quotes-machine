import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';

function GallFifth () {
  const {colors, quote, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let chooseFifth = '';
  let disableFifth = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 5) {
    disableFifth = '';
  };

  if (gallChoose === 4) {
    chooseFifth = 'Chosen';
  };
  
  const handleGallFifth = () => {
    stopAuto();
    setGallChoose(4);
    setQuoteText(gallArray[4].text);
    setAuthor(gallArray[4].author);
  };

  return (
    <p
      className={`BG-color${colorNumber} gallBtn${chooseFifth} ${disableFifth} gallFive`}
      onClick={handleGallFifth}/>
  );
};

export default GallFifth;