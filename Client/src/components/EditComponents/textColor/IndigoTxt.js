import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function IndigoTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let indigoTxtState = '';
  
  if (parentToChild.config.imgBG === 5) {
    indigoTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 5) {
    indigoTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleIndigoTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(5);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 5;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color5 ${indigoTxtState}`} onClick={handleIndigoTxt}></button>
  );
};

export default IndigoTxt;