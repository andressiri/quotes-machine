import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function VioletTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let violetTxtState = '';
  
  if (imgBGColor === 6) {
    violetTxtState = 'buttonDisabled';
  };
  if (colorNumber === 6) {
    violetTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleVioletTxt () {
    setColorNumber(6);
  };

  return (
    <button className={`customBtn BG-color6 ${violetTxtState}`} onClick={handleVioletTxt}></button>
  );
};

export default VioletTxt;