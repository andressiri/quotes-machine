import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let yellowBGState = '';
  
  if (colorNumber == 2) {
    yellowBGState = 'buttonDisabled';
  };

  function handleYellowBG () {
    setImgBGColor(2);
  };

  return (
    <button class={`BG-color2 ${yellowBGState}`} onClick={handleYellowBG}></button>
  );
};

export default YellowBG;