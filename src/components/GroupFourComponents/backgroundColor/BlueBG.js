import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlueBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let blueBGState= '';

  if (colorNumber == 4) {
    blueBGState = 'buttonDisabled';
  };

  function handleBlueBG () {
    setImgBGColor(4);
  };

  return (
    <button class={`BG-color4 ${blueBGState}`} onClick={handleBlueBG}></button>
  );
};

export default BlueBG;