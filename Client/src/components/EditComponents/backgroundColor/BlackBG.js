import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlackBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let blackBGState = '';

  if (config.colorNum === 7) {
    blackBGState = 'buttonDisabled';
  };
  if (config.imgBG === 7) {
    blackBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  function handleBlackBG () {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(7);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.imgBG = 7;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color7 ${blackBGState}`} onClick={handleBlackBG}></button>
  );
};

export default BlackBG;