import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function VioletBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let violetBGState = '';

  if (parentToChild.config.colorNum === 6) {
    violetBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 6) {
    violetBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };

  function handleVioletBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(6);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 6;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color6 ${violetBGState}`} onClick={handleVioletBG}></button>
  );
};

export default VioletBG;