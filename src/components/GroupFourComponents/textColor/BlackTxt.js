import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlackTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let blackTxtState = '';

  if (imgBGColor == 7) {
    blackTxtState = 'buttonDisabled';
  };

  function handleBlackTxt () {
    setColorNumber(7);
  };

  return (
    <button class={`BG-color7 ${blackTxtState}`} onClick={handleBlackTxt}></button>
  );
};

export default BlackTxt;