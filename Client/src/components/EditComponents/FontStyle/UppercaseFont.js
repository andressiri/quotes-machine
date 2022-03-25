import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function UppercaseFont ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [upperFont, setUpperFont] = edit.upperF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let upperBGColor = parentToChild.config.imgBG;
  let upperTxtColor = parentToChild.config.colorNum;

  if (parentToChild.config.upperF === 'uppercase') {
    upperBGColor = parentToChild.config.colorNum;
    upperTxtColor = parentToChild.config.imgBG;
  }; 

  function handleUppercaseFont () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      if (parentToChild.config.upperF === 'none') return setUpperFont('uppercase');
      setUpperFont('none');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      if (parentToChild.config.upperF === 'none') {
        auxObj.upperF = 'uppercase';
      } else {
        auxObj.upperF = 'none';
      };  
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  }; 

  return (
    <button className={`editBtn fFam BG-color${upperBGColor} text-color${upperTxtColor}`} onClick={handleUppercaseFont}>UP</button>
  );
};

export default UppercaseFont;