import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function SansSerifFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let sansSerifBGColor = parentToChild.config.imgBG;
  let sansSerifTxtColor = parentToChild.config.colorNum;

  if (parentToChild.config.fontF === 'Arial, Helvetica, sans-serif') {
    sansSerifBGColor = parentToChild.config.colorNum;
    sansSerifTxtColor = parentToChild.config.imgBG;
  }; 

  function handleSansSerifFF () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setFontFam('Arial, Helvetica, sans-serif');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.fontF = 'Arial, Helvetica, sans-serif';
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };

  return (
    <button className={`editBtn fFam BG-color${sansSerifBGColor} text-color${sansSerifTxtColor}`} style={{fontFamily: "Arial, Helvetica, sans-serif"}} onClick={handleSansSerifFF}>Aa</button>
  );
};

export default SansSerifFF;