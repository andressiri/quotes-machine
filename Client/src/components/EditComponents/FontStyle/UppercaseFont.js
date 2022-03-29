import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function UppercaseFont ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [upperFont, setUpperFont] = edit.upperF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let upperBGColor = config.imgBG;
  let upperTxtColor = config.colorNum;

  if (config.upperF === 'uppercase') {
    upperBGColor = config.colorNum;
    upperTxtColor = config.imgBG;
  }; 

  function handleUppercaseFont () {
    if (config._id === 'This was called by QuoteBox') {
      if (config.upperF === 'none') return setUpperFont('uppercase');
      setUpperFont('none');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      if (config.upperF === 'none') {
        auxObj.upperF = 'uppercase';
      } else {
        auxObj.upperF = 'none';
      };  
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  }; 

  return (
    <button
    className={`editBtn fFam BG-color${upperBGColor} text-color${upperTxtColor}`}
    onClick={handleUppercaseFont}
    >UP</button>
  );
};

export default UppercaseFont;