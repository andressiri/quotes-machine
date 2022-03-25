import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let orangeTxtState = '';
  
  if (parentToChild.config.imgBG === 1) {
    orangeTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 1) {
    orangeTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleOrangeTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(1);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 1;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color1 ${orangeTxtState}`} onClick={handleOrangeTxt}></button>
  );
};

export default OrangeTxt;