import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlueTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let blueTxtState = '';
  
  if (parentToChild.config.imgBG === 4) {
    blueTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 4) {
    blueTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleBlueTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(4);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 4;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color4 ${blueTxtState}`} onClick={handleBlueTxt}></button>
  );
};

export default BlueTxt;