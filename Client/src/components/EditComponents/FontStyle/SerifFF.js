import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function SerifFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let serifBGColor = config.imgBG;
  let serifTxtColor = config.colorNum;

  if (config.fontF === 'Garamond, serif') {
    serifBGColor = config.colorNum;
    serifTxtColor = config.imgBG;
  }; 

  function handleSerifFF () {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam('Garamond, serif');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.fontF = 'Garamond, serif';
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };
  return (
    <button
      className={`editBtn fFam BG-color${serifBGColor} text-color${serifTxtColor}`}
      style={{fontFamily: "Garamond, serif"}}
      onClick={handleSerifFF}
      >Aa</button>
  );
};

export default SerifFF;