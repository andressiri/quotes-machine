import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function ItalicFont () {
  const {colors, quote, auto, groups, refs, custom} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [italicFont, setItalicFont] = custom.italicF;
  let italicBGColor = imgBGColor;
  let italicTxtColor = colorNumber;

  if (italicFont == 'italic') {
    italicBGColor = colorNumber;
    italicTxtColor = imgBGColor;
  }; 

  function handleItalicFont () {
    if (italicFont == 'normal') {
      setItalicFont('italic');
    } else {
      setItalicFont('normal');
    };
  };

  return (
    <button class={`customBtn fFam BG-color${italicBGColor} text-color${italicTxtColor}`} style={{fontStyle: 'italic'}} onClick={handleItalicFont}>K</button>
  );
};

export default ItalicFont;