import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function VioletTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let violetTxtState = '';
  
  if (parentToChild.config.imgBG === 6) {
    violetTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 6) {
    violetTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleVioletTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(6);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 6;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color6 ${violetTxtState}`} onClick={handleVioletTxt}></button>
  );
};

export default VioletTxt;