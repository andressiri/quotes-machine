import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlackBG () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let blackBGState = '';

  if (colorNumber === 7) {
    blackBGState = 'buttonDisabled';
  };
  if (imgBGColor === 7) {
    blackBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleBlackBG () {
    setImgBGColor(7);
  };

  return (
    <button className={`editBtn BG-color7 ${blackBGState}`} onClick={handleBlackBG}></button>
  );
};

export default BlackBG;