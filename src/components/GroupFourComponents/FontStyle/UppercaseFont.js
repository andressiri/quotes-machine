import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function UppercaseFont () {
  const {colors, quote, auto, groups, refs, custom} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [upperFont, setUpperFont] = custom.upperF;
  let upperBGColor = imgBGColor;
  let upperTxtColor = colorNumber;

  if (upperFont == 'uppercase') {
    upperBGColor = colorNumber;
    upperTxtColor = imgBGColor;
  }; 

  function handleUppercaseFont () {
    if (upperFont == 'none') {
      setUpperFont('uppercase');
    } else {
      setUpperFont('none');
    };
  };

  return (
    <button class={`customBtn fFam BG-color${upperBGColor} text-color${upperTxtColor}`} onClick={handleUppercaseFont}>UP</button>
  );
};

export default UppercaseFont;