import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let orangeBGState = '';

  if (colorNumber == 1) {
    orangeBGState = 'buttonDisabled';
  };

  function handleOrangeBG () {
    setImgBGColor(1);
  };

  return (
    <button class={`BG-color1 ${orangeBGState}`} onClick={handleOrangeBG}></button>
  );
};

export default OrangeBG;