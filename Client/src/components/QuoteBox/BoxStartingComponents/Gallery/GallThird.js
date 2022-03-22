import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/useStopAuto.js';

function GallThird () {
  const {colors, quote, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let chooseThird = '';
  let disableThird = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 3) {
    disableThird = '';
  };
  
  if (gallChoose === 2) {
    chooseThird = 'Chosen';
  };
  
  function handleGallThird () {
    stopAuto(); 
    setGallChoose(2);
    setQuoteText(gallArray[2].text);
    setAuthor(gallArray[2].author);
  };

  return (
    <p className={`gallBtn${chooseThird} BG-color${colorNumber} ${disableThird}`} onClick={handleGallThird} />
  );
};

export default GallThird;