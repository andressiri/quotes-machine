import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/useStopAuto.js';

function ArrowNext () {
  const {quote, gall} = useContext(Context);
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let disableNext = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 2) {
    disableNext = '';
  };

  function handleArrowNext () {
    stopAuto(); 
    if (gallChoose >= gallArray.length - 1) {
      setQuoteText(gallArray[0].text);
      setAuthor(gallArray[0].author);
      setGallChoose(0);
    } else {
      const index = gallChoose + 1;
      setQuoteText(gallArray[index].text);
      setAuthor(gallArray[index].author);
      setGallChoose(gallChoose => gallChoose + 1);
    };
  };

  return (
    <h1 
      className={`gallArrowNext ${disableNext}`}
      onClick={handleArrowNext}
      >&gt;</h1>
  );
};

export default ArrowNext;