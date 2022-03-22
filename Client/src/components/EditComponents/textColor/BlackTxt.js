import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlackTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let blackTxtState = '';

  if (imgBGColor === 7) {
    blackTxtState = 'buttonDisabled';
  };
  if (colorNumber === 7) {
    blackTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleBlackTxt () {
    setColorNumber(7);
  };

  return (
    <button className={`editBtn BG-color7 ${blackTxtState}`} onClick={handleBlackTxt}></button>
  );
};

export default BlackTxt;