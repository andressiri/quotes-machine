import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function SansSerifFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let sansSerifBGColor = config.imgBG;
  let sansSerifTxtColor = config.colorNum;

  if (config.fontF === 'Arial, Helvetica, sans-serif') {
    sansSerifBGColor = config.colorNum;
    sansSerifTxtColor = config.imgBG;
  }; 

  function handleSansSerifFF () {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam('Arial, Helvetica, sans-serif');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.fontF = 'Arial, Helvetica, sans-serif';
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };

  return (
    <button
    className={`editBtn fFam BG-color${sansSerifBGColor} text-color${sansSerifTxtColor}`}
    style={{fontFamily: "Arial, Helvetica, sans-serif"}}
    onClick={handleSansSerifFF}
    >Aa</button>
  );
};

export default SansSerifFF;