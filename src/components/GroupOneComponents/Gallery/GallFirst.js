import React, {useContext} from 'react';
import {Context} from './../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';

function GallFirst () {
  const {colors, quote, auto, groups, refs, custom, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let chooseFirst = '';
  const stopAuto = useStopAuto();
  
  if (gallChoose === 0) {
    chooseFirst = 'Chosen';
    setQuoteText(gallArray[0].text);
    setAuthor(gallArray[0].author);
  };
  
  function handleGallFirst () {
    stopAuto(); 
    setGallChoose(0);
  };

  return (
    <h1 className={`gallBtn${chooseFirst} BG-color${colorNumber} gallOne`} onClick={handleGallFirst} />
  );
};

export default GallFirst;