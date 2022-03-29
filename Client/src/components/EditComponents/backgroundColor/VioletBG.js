import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function VioletBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let violetBGState = '';

  if (config.colorNum === 6) {
    violetBGState = 'buttonDisabled';
  };
  if (config.imgBG === 6) {
    violetBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  function handleVioletBG () {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(6);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.imgBG = 6;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color6 ${violetBGState}`} onClick={handleVioletBG}></button>
  );
};

export default VioletBG;