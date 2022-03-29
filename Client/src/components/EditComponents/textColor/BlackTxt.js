import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function BlackTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let blackTxtState = '';

  if (config.imgBG === 7) {
    blackTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 7) {
    blackTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  function handleBlackTxt () {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(7);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 7;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color7 ${blackTxtState}`} onClick={handleBlackTxt}></button>
  );
};

export default BlackTxt;