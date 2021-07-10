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
  if (imgBGColor == 8) {
    whiteBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleWhiteBG () {
    setImgBGColor(8);
  };

  return (
    <button class={`customBtn BG-color8 ${whiteBGState}`} onClick={handleWhiteBG}></button>
  );
};

export default WhiteBG;