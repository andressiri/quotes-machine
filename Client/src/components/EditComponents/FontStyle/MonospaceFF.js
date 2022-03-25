import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function MonospaceFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let monospaceBGColor = parentToChild.config.imgBG;
  let monospaceTxtColor = parentToChild.config.colorNum;

  if (parentToChild.config.fontF === '"Courier New", Courier, monospace') {
    monospaceBGColor = parentToChild.config.colorNum;
    monospaceTxtColor = parentToChild.config.imgBG;
  }; 

  function handleMonospaceFF () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setFontFam('"Courier New", Courier, monospace');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.fontF = '"Courier New", Courier, monospace';
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };

  return (
    <button className={`editBtn fFam BG-color${monospaceBGColor} text-color${monospaceTxtColor}`} style={{fontFamily: '"Courier New", Courier, monospace'}} onClick={handleMonospaceFF}><div id="monospaceBtn">Aa</div></button>
  );
};

export default MonospaceFF;