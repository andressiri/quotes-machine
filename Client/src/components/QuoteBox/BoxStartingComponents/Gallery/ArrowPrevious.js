import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';

function ArrowPrevious () {
  const {quote, gall} = useContext(Context);
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let disablePrevious = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 2) {
    disablePrevious = '';
  };

  const handleArrowPrevious = () => {
    stopAuto(); 
    if (gallChoose === 0) {
      const auxIndex = gallArray.length - 1;
      setQuoteText(gallArray[auxIndex].text);
      setAuthor(gallArray[auxIndex].author);
      setGallChoose(auxIndex);

    } else {
      const index = gallChoose - 1;
      setQuoteText(gallArray[index].text);
      setAuthor(gallArray[index].author);
      setGallChoose(gallChoose => gallChoose - 1);
    };
  };

  return (
    <h1
      className={`gallArrow ${disablePrevious}`}
      onClick={handleArrowPrevious}
      >&lt;</h1>
  );
};

export default ArrowPrevious;