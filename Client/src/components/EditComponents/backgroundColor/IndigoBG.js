import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function IndigoBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let indigoBGState = '';
  
  if (config.colorNum === 5) {
    indigoBGState = 'buttonDisabled';
  };
  if (config.imgBG === 5) {
    indigoBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  function handleIndigoBG () {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(5);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.imgBG = 5;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color5 ${indigoBGState}`} onClick={handleIndigoBG}></button>
  );
};

export default IndigoBG;