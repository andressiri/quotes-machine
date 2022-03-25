import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function WhiteBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let whiteBGState = '';

  if (parentToChild.config.colorNum === 8 || parentToChild.config.colorNum === 2) {
    whiteBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 8) {
    whiteBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };

  function handleWhiteBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(8);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 8;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color8 ${whiteBGState}`} onClick={handleWhiteBG}></button>
  );
};

export default WhiteBG;