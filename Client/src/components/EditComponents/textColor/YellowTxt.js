import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let yellowTxtState = '';
  
  if (parentToChild.config.imgBG === 2 || parentToChild.config.imgBG === 8) {
    yellowTxtState = 'buttonDisabled';
  };
  if (parentToChild.config.colorNum === 2) {
    yellowTxtState = `buttonEnabled text-color${parentToChild.config.imgBG}`;
  };

  function handleYellowTxt () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setColorNumber(2);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.colorNum = 2;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color2 ${yellowTxtState}`} onClick={handleYellowTxt}></button>
  );
};

export default YellowTxt;