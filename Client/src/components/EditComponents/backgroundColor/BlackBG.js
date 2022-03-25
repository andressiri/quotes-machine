import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlackBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let blackBGState = '';

  if (parentToChild.config.colorNum === 7) {
    blackBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 7) {
    blackBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };

  function handleBlackBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(7);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 7;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color7 ${blackBGState}`} onClick={handleBlackBG}></button>
  );
};

export default BlackBG;