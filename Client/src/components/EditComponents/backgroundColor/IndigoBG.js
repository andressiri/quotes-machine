import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function IndigoBG () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let indigoBGState = '';
  
  if (colorNumber == 5) {
    indigoBGState = 'buttonDisabled';
  };
  if (imgBGColor == 5) {
    indigoBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleIndigoBG () {
    setImgBGColor(5);
  };

  return (
    <button class={`customBtn BG-color5 ${indigoBGState}`} onClick={handleIndigoBG}></button>
  );
};

export default IndigoBG;