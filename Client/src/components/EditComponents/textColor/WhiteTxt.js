import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function WhiteTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let whiteTxtState = '';
  
  if (imgBGColor === 8|| imgBGColor === 2) {
    whiteTxtState = 'buttonDisabled';
  };
  if (colorNumber === 8) {
    whiteTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleWhiteTxt () {
    setColorNumber(8);
  };

  return (
    <button className={`editBtn BG-color8 ${whiteTxtState}`} onClick={handleWhiteTxt}></button>
  );
};

export default WhiteTxt;