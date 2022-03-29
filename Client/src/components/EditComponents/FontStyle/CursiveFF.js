import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function CursiveFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let cursiveBGColor = config.imgBG;
  let cursiveTxtColor = config.colorNum;

  if (config.fontF === '"Brush Script MT", cursive') {
    cursiveBGColor = config.colorNum;
    cursiveTxtColor = config.imgBG;
  }; 

  function handleCursiveFF () {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam('"Brush Script MT", cursive');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.fontF = '"Brush Script MT", cursive';
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };

  return (
    <label>
      <button
        className={`editBtn fFam BG-color${cursiveBGColor} text-color${cursiveTxtColor}`}
        style={{fontFamily: '"Brush Script MT", cursive'}}
        onClick={handleCursiveFF}
        ><div id="cursiveBtn">Aa</div></button>
    </label>
  );
};

export default CursiveFF;