import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function FontSize ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);  
  const [fSize, setFSize] = edit.fontS;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;

  function handleFontSize () {
    if (config._id === 'This was called by QuoteBox') {
      if (config.fontS === 40) return setFSize(30);
      setFSize(n => n + 1);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      if (config.fontS === 40) {
        auxObj.fontS = 30;
      } else {
        auxObj.fontS = config.fontS + 1;
      }; 
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    }
  };

  return (
    <button
      className={`editBtn fFam BG-color${config.imgBG}
      text-color${config.colorNum}`}
      onClick={handleFontSize}
      >{config.fontS}</button>
  );
};

export default FontSize;