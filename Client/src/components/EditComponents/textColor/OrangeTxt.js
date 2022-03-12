import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let orangeTxtState = '';
  
  if (imgBGColor == 1) {
    orangeTxtState = 'buttonDisabled';
  };
  if (colorNumber == 1) {
    orangeTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleOrangeTxt () {
    setColorNumber(1);
  };

  return (
    <button class={`customBtn BG-color1 ${orangeTxtState}`} onClick={handleOrangeTxt}></button>
  );
};

export default OrangeTxt;