import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function VioletTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let violetTxtState = '';
  
  if (config.imgBG === 6) {
    violetTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 6) {
    violetTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  function handleVioletTxt () {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(6);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 6;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color6 ${violetTxtState}`} onClick={handleVioletTxt}></button>
  );
};

export default VioletTxt;