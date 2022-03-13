import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function FontSize () {
  const {colors, custom} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fSize, setFSize] = custom.fontS;

  function handleFontSize () {
    if (fSize !== 40) {
      setFSize(n => n + 1);
    } else {
      setFSize(30);
    };
  };

  return (
    <button className={`customBtn fFam BG-color${imgBGColor} text-color${colorNumber}`} onClick={handleFontSize}>{fSize}</button>
  );
};

export default FontSize;