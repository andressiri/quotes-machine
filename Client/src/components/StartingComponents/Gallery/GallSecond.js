import React, {useContext} from 'react';
import {Context} from './../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';

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
    setQuoteText(gallArray[1].text);
    setAuthor(gallArray[1].author);
  };
  
  function handleGallSecond () {
    stopAuto(); 
    setGallChoose(1);
  };

  return (
    <h1 className={`gallBtn${chooseSecond} BG-color${colorNumber} ${disableSecond} gallTwo`} onClick={handleGallSecond} />
  );
};

export default GallSecond;