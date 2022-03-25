import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function WhiteTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let whiteTxtState = '';
  
  if (parentToChild.config.imgBG === 8 || parentToChild.config.imgBG === 2) {
    whiteTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 8) {
    whiteTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleWhiteTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(8);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 8;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color8 ${whiteTxtState}`} onClick={handleWhiteTxt}></button>
  );
};

export default WhiteTxt;