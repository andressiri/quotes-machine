import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function VioletTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let violetTxtState = '';
  
  if (imgBGColor == 6) {
    violetTxtState = 'buttonDisabled';
  };

  function handleVioletTxt () {
    setColorNumber(6);
  };

  return (
    <button class={`BG-color6 ${violetTxtState}`} onClick={handleVioletTxt}></button>
  );
};

export default VioletTxt;