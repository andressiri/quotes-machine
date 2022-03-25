import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function GreenTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let greenTxtState = '';
  
  if (parentToChild.config.imgBG === 3) {
    greenTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 3) {
    greenTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleGreenTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(3);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 3;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color3 ${greenTxtState}`} onClick={handleGreenTxt}></button>
  );
};

export default GreenTxt;