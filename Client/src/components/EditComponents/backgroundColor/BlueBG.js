import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlueBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  let blueBGState= '';

  if (parentToChild.config.colorNum === 4) {
    blueBGState = 'buttonDisabled';
  };
  if (parentToChild.config.imgBG === 4) {
    blueBGState = `buttonEnabled text-color${parentToChild.config.colorNum}`;
  };

  function handleBlueBG () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setImgBGColor(4);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[parentToChild.index];
      auxObj.imgBG = 4;
      auxArray[parentToChild.index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button className={`editBtn BG-color4 ${blueBGState}`} onClick={handleBlueBG}></button>
  );
};

export default BlueBG;