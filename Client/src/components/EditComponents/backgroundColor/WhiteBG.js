import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function WhiteBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let whiteBGState = '';

  if (config.colorNum === 8 || config.colorNum === 2) {
    whiteBGState = 'buttonDisabled';
  };
  if (config.imgBG === 8) {
    whiteBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  function handleWhiteBG () {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(8);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.imgBG = 8;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color8 ${whiteBGState}`} onClick={handleWhiteBG}></button>
  );
};

export default WhiteBG;