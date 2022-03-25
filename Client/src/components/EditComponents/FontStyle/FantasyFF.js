import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function FantasyFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let fantasyBGColor = parentToChild.config.imgBG;
  let fantasyTxtColor = parentToChild.config.colorNum;

  if (parentToChild.config.fontF === 'Copperplate, Papyrus, fantasy') {
    fantasyBGColor = parentToChild.config.colorNum;
    fantasyTxtColor = parentToChild.config.imgBG;
  }; 

  function handleFantasyFF () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setFontFam('Copperplate, Papyrus, fantasy');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.fontF = 'Copperplate, Papyrus, fantasy';
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };

  return (
    <label>
      <button className={`editBtn fFam BG-color${fantasyBGColor} text-color${fantasyTxtColor}`} style={{fontFamily: "Copperplate, Papyrus, fantasy"}} onClick={handleFantasyFF}><div id="fantasyBtn">Aa</div></button>
    </label>
  );
};

export default FantasyFF;