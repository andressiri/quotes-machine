import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlackBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let blackBGState = '';

  if (colorNumber == 7) {
    blackBGState = 'buttonDisabled';
  }; 

  function handleBlackBG () {
    setImgBGColor(7);
  };

  return (
    <button class={`BG-color7 ${blackBGState}`} onClick={handleBlackBG}></button>
  );
};

export default BlackBG;