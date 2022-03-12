import React, {useContext} from 'react';
import {Context} from './../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';

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
    setQuoteText(gallArray[3].text);
    setAuthor(gallArray[3].author);
  };
  
  function handleGallFourth () {
    stopAuto(); 
    setGallChoose(3);
  };

  return (
    <h1 className={`gallBtn${chooseFourth} BG-color${colorNumber} ${disableFourth} gallFour`} onClick={handleGallFourth} />
  );
};

export default GallFourth;