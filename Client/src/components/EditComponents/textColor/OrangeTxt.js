import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let orangeTxtState = '';
  
  if (config.imgBG === 1) {
    orangeTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 1) {
    orangeTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  function handleOrangeTxt () {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(1);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 1;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color1 ${orangeTxtState}`} onClick={handleOrangeTxt}></button>
  );
};

export default OrangeTxt;