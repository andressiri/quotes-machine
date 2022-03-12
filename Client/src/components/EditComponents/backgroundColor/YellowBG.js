import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowBG () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let yellowBGState = '';
  
  if (colorNumber == 2 || colorNumber == 8) {
    yellowBGState = 'buttonDisabled';
  };
  if (imgBGColor == 2) {
    yellowBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleYellowBG () {
    setImgBGColor(2);
  };

  return (
    <button class={`customBtn BG-color2 ${yellowBGState}`} onClick={handleYellowBG}></button>
  );
};

export default YellowBG;