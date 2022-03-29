import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let yellowTxtState = '';
  
  if (config.imgBG === 2 || config.imgBG === 8) {
    yellowTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 2) {
    yellowTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  function handleYellowTxt () {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(2);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 2;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color2 ${yellowTxtState}`} onClick={handleYellowTxt}></button>
  );
};

export default YellowTxt;