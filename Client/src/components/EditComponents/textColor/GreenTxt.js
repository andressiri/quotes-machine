import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function GreenTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let greenTxtState = '';
  
  if (imgBGColor === 3) {
    greenTxtState = 'buttonDisabled';
  };
  if (colorNumber === 3) {
    greenTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleGreenTxt () {
    setColorNumber(3);
  };

  return (
    <button className={`customBtn BG-color3 ${greenTxtState}`} onClick={handleGreenTxt}></button>
  );
};

export default GreenTxt;