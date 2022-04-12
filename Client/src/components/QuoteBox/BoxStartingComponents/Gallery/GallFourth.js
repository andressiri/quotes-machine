import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';

function GallFourth () {
  const {colors, quote, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [author, setAuthor] = quote.auth;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let chooseFourth = '';
  let disableFourth = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 4) {
    disableFourth = '';
  };
  
  if (gallChoose === 3) {
    chooseFourth = 'Chosen';
  };
  
  const handleGallFourth = () => {
    stopAuto(); 
    setGallChoose(3);
    setQuoteText(gallArray[3].text);
    setAuthor(gallArray[3].author);
  };

  return (
    <p
      className={`BG-color${colorNumber} gallBtn${chooseFourth} ${disableFourth} gallFour`}
      onClick={handleGallFourth} />
  );
};

export default GallFourth;