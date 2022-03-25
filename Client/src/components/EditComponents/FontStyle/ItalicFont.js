import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function ItalicFont ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [italicFont, setItalicFont] = edit.italicF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let italicBGColor = parentToChild.config.imgBG;
  let italicTxtColor = parentToChild.config.colorNum;

  if (parentToChild.config.italicF === 'italic') {
    italicBGColor = parentToChild.config.colorNum;
    italicTxtColor = parentToChild.config.imgBG;
  }; 

  function handleItalicFont () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      if (parentToChild.config.italicF === 'normal') return setItalicFont('italic');
      setItalicFont('normal');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      if (parentToChild.config.italicF === 'normal') {
        auxObj.italicF = 'italic';
      } else {
        auxObj.italicF = 'normal';
      };
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  }; 
  
  return (
    <button className={`editBtn fFam BG-color${italicBGColor} text-color${italicTxtColor}`} style={{fontStyle: 'italic'}} onClick={handleItalicFont}>I</button>
  );
};

export default ItalicFont;