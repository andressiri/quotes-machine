import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function VioletBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let violetBGState = '';

  if (colorNumber == 6) {
    violetBGState = 'buttonDisabled';
  };

  function handleVioletBG () {
    setImgBGColor(6);
  };

  return (
    <button class={`BG-color6 ${violetBGState}`} onClick={handleVioletBG}></button>
  );
};

export default VioletBG;