import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function IndigoTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let indigoTxtState = '';
  
  if (imgBGColor == 5) {
    indigoTxtState = 'buttonDisabled';
  };

  function handleIndigoTxt () {
    setColorNumber(5);
  };

  return (
    <button class={`BG-color5 ${indigoTxtState}`} onClick={handleIndigoTxt}></button>
  );
};

export default IndigoTxt;