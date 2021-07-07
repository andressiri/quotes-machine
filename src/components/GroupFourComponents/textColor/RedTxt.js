import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let redTxtState = '';
  
  if (imgBGColor == 0) {
    redTxtState = 'buttonDisabled';
  };

  function handleRedTxt () {
    setColorNumber(0);
  };

  return (
    <button class={`BG-color0 ${redTxtState}`} onClick={handleRedTxt}></button>
  );
};

export default RedTxt;