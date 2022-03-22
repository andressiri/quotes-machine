import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let yellowTxtState = '';
  
  if (imgBGColor === 2 || imgBGColor === 8) {
    yellowTxtState = 'buttonDisabled';
  };
  if (colorNumber === 2) {
    yellowTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleYellowTxt () {
    setColorNumber(2);
  };

  return (
    <button className={`editBtn BG-color2 ${yellowTxtState}`} onClick={handleYellowTxt}></button>
  );
};

export default YellowTxt;