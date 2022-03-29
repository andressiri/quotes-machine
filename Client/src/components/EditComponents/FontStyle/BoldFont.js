import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function BoldFont ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [boldFont, setBoldFont] = edit.boldF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let boldBGColor = config.imgBG;
  let boldTxtColor = config.colorNum;

  if (config.boldF === 'bold') {
    boldBGColor = config.colorNum;
    boldTxtColor = config.imgBG;
  }; 

  function handleBoldFont () {
    if (config._id === 'This was called by QuoteBox') {
      if (config.boldF === 'normal') return setBoldFont('bold');
      setBoldFont('normal');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      if (config.boldF === 'normal') {
        auxObj.boldF = 'bold';
      } else {
        auxObj.boldF = 'normal';
      };
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  }; 

  return (
    <button 
      className={`editBtn fFam BG-color${boldBGColor} text-color${boldTxtColor}`}
      style={{fontWeight: 'bold'}}
      onClick={handleBoldFont}
    >B</button>
  );
};

export default BoldFont;