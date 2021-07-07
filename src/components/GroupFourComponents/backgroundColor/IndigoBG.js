import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function IndigoBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let indigoBGState = '';
  
  if (colorNumber == 5) {
    indigoBGState = 'buttonDisabled';
  };

  function handleIndigoBG () {
    setImgBGColor(5);
  };

  return (
    <button class={`BG-color5 ${indigoBGState}`} onClick={handleIndigoBG}></button>
  );
};

export default IndigoBG;