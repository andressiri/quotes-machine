import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function YellowBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let yellowBGState = '';
  
  if (config.colorNum === 2 || config.colorNum === 8) {
    yellowBGState = 'buttonDisabled';
  };
  if (config.imgBG === 2) {
    yellowBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  function handleYellowBG () {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(2);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.imgBG = 2;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color2 ${yellowBGState}`} onClick={handleYellowBG}></button>
  );
};

export default YellowBG;