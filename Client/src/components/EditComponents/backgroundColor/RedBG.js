import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let redBGState = '';

  if (parentToChild.config.colorNum === 0) {
    redBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 0) {
    redBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };

  function handleRedBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(0);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 0;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color0 ${redBGState}`} onClick={handleRedBG}></button>
  );
};

export default RedBG;