import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedBG () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let redBGState = '';

  if (colorNumber === 0) {
    redBGState = 'buttonDisabled';
  };
  if (imgBGColor === 0) {
    redBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleRedBG () {
    setImgBGColor(0);
  };

  return (
    <button className={`customBtn BG-color0 ${redBGState}`} onClick={handleRedBG}></button>
  );
};

export default RedBG;