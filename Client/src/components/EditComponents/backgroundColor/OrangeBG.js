import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let orangeBGState = '';

  if (parentToChild.config.colorNum === 1) {
    orangeBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 1) {
    orangeBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };

  function handleOrangeBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(1);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 1;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color1 ${orangeBGState}`} onClick={handleOrangeBG}></button>
  );
};

export default OrangeBG;