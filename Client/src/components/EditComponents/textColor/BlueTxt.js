import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlueTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let blueTxtState = '';
  
  if (imgBGColor === 4) {
    blueTxtState = 'buttonDisabled';
  };
  if (colorNumber === 4) {
    blueTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleBlueTxt () {
    setColorNumber(4);
  };

  return (
    <button className={`editBtn BG-color4 ${blueTxtState}`} onClick={handleBlueTxt}></button>
  );
};

export default BlueTxt;