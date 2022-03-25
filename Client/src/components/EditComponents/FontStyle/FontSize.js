import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function FontSize ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);  
  const [fSize, setFSize] = edit.fontS;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;

  function handleFontSize () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      if (parentToChild.config.fontS === 40) return setFSize(30);
      setFSize(n => n + 1);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      if (parentToChild.config.fontS === 40) {
        auxObj.fontS = 30;
      } else {
        auxObj.fontS = parentToChild.config.fontS + 1;
      }; 
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    }
  };

  return (
    <button className={`editBtn fFam BG-color${parentToChild.config.imgBG} text-color${parentToChild.config.colorNum}`} onClick={handleFontSize}>{parentToChild.config.fontS}</button>
  );
};

export default FontSize;