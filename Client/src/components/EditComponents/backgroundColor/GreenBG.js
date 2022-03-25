import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function GreenBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let greenBGState = '';

  if (parentToChild.config.colorNum === 3) {
    greenBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 3) {
    greenBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };
  function handleGreenBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(3);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 3;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color3 ${greenBGState}`} onClick={handleGreenBG}></button>
  );
};

export default GreenBG;