import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let redTxtState = '';
  
  if (config.imgBG === 0) {
    redTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 0) {
    redTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  function handleRedTxt () {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(0);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 0;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color0 ${redTxtState}`} onClick={handleRedTxt}></button>
  );
};

export default RedTxt;