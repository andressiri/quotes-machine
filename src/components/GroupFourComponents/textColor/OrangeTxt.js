import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let orangeTxtState = '';
  
  if (imgBGColor == 1) {
    orangeTxtState = 'buttonDisabled';
  };

  function handleOrangeTxt () {
    setColorNumber(1);
  };

  return (
    <button class={`BG-color1 ${orangeTxtState}`} onClick={handleOrangeTxt}></button>
  );
};

export default OrangeTxt;