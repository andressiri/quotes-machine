import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function FantasyFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let fantasyBGColor = config.imgBG;
  let fantasyTxtColor = config.colorNum;

  if (config.fontF === 'Copperplate, Papyrus, fantasy') {
    fantasyBGColor = config.colorNum;
    fantasyTxtColor = config.imgBG;
  }; 

  function handleFantasyFF () {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam('Copperplate, Papyrus, fantasy');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.fontF = 'Copperplate, Papyrus, fantasy';
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };  
  };

  return (
    <label>
      <button
        className={`editBtn fFam BG-color${fantasyBGColor} text-color${fantasyTxtColor}`}
        style={{fontFamily: "Copperplate, Papyrus, fantasy"}}
        onClick={handleFantasyFF}
        ><div id="fantasyBtn">Aa</div></button>
    </label>
  );
};

export default FantasyFF;