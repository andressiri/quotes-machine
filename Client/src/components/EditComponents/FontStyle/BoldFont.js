import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function BoldFont ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [boldFont, setBoldFont] = edit.boldF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let boldBGColor = parentToChild.config.imgBG;
  let boldTxtColor = parentToChild.config.colorNum;

  if (parentToChild.config.boldF === 'bold') {
    boldBGColor = parentToChild.config.colorNum;
    boldTxtColor = parentToChild.config.imgBG;
  }; 

  function handleBoldFont () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      if (parentToChild.config.boldF === 'normal') return setBoldFont('bold');
      setBoldFont('normal');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      if (parentToChild.config.boldF === 'normal') {
        auxObj.boldF = 'bold';
      } else {
        auxObj.boldF = 'normal';
      };
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  }; 

  return (
    <button className={`editBtn fFam BG-color${boldBGColor} text-color${boldTxtColor}`} style={{fontWeight: 'bold'}} onClick={handleBoldFont}>B</button>
  );
};

export default BoldFont;