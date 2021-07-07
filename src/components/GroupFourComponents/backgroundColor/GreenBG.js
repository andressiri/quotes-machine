import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function GreenBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let greenBGState = '';

  if (colorNumber == 3) {
    greenBGState = 'buttonDisabled';
  };

  function handleGreenBG () {
    setImgBGColor(3);
  };

  return (
    <button class={`BG-color3 ${greenBGState}`} onClick={handleGreenBG}></button>
  );
};

export default GreenBG;