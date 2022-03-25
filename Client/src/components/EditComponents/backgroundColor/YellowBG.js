import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let yellowBGState = '';
  
  if (parentToChild.config.colorNum === 2 || parentToChild.config.colorNum === 8) {
    yellowBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 2) {
    yellowBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };

  function handleYellowBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(2);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 2;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color2 ${yellowBGState}`} onClick={handleYellowBG}></button>
  );
};

export default YellowBG;