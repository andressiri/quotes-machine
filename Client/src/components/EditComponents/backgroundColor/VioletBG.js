import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function VioletBG () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let violetBGState = '';

  if (colorNumber == 6) {
    violetBGState = 'buttonDisabled';
  };
  if (imgBGColor == 6) {
    violetBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleVioletBG () {
    setImgBGColor(6);
  };

  return (
    <button class={`customBtn BG-color6 ${violetBGState}`} onClick={handleVioletBG}></button>
  );
};

export default VioletBG;