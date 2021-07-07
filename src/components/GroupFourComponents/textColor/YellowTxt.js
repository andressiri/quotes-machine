import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let yellowTxtState = '';
  
  if (imgBGColor == 2) {
    yellowTxtState = 'buttonDisabled';
  };

  function handleYellowTxt () {
    setColorNumber(2);
  };

  return (
    <button class={`BG-color2 ${yellowTxtState}`} onClick={handleYellowTxt}></button>
  );
};

export default YellowTxt;