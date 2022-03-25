import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let redTxtState = '';
  
  if (parentToChild.config.imgBG === 0) {
    redTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 0) {
    redTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleRedTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(0);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 0;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color0 ${redTxtState}`} onClick={handleRedTxt}></button>
  );
};

export default RedTxt;