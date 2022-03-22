import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let redTxtState = '';
  
  if (imgBGColor === 0) {
    redTxtState = 'buttonDisabled';
  };
  if (colorNumber === 0) {
    redTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleRedTxt () {
    setColorNumber(0);
  };

  return (
    <button className={`editBtn BG-color0 ${redTxtState}`} onClick={handleRedTxt}></button>
  );
};

export default RedTxt;