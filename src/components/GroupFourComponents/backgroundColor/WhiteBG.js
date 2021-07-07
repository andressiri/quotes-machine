import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function WhiteBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let whiteBGState = '';

  if (colorNumber == 8) {
    whiteBGState = 'buttonDisabled';
  };

  function handleWhiteBG () {
    setImgBGColor(8);
  };

  return (
    <button class={`BG-color8 ${whiteBGState}`} onClick={handleWhiteBG}></button>
  );
};

export default WhiteBG;