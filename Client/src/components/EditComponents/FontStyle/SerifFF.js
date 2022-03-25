import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function SerifFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let serifBGColor = parentToChild.config.imgBG;
  let serifTxtColor = parentToChild.config.colorNum;

  if (parentToChild.config.fontF === 'Garamond, serif') {
    serifBGColor = parentToChild.config.colorNum;
    serifTxtColor = parentToChild.config.imgBG;
  }; 

  function handleSerifFF () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setFontFam('Garamond, serif');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.fontF = 'Garamond, serif';
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };
  return (
    <button className={`editBtn fFam BG-color${serifBGColor} text-color${serifTxtColor}`} style={{fontFamily: "Garamond, serif"}} onClick={handleSerifFF}>Aa</button>
  );
};

export default SerifFF;