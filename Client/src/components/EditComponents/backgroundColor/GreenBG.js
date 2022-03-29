import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function GreenBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let greenBGState = '';

  if (config.colorNum === 3) {
    greenBGState = 'buttonDisabled';
  };
  if (config.imgBG === 3) {
    greenBGState = `buttonEnabled text-color${config.colorNum}`;
  };
  function handleGreenBG () {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(3);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.imgBG = 3;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color3 ${greenBGState}`} onClick={handleGreenBG}></button>
  );
};

export default GreenBG;