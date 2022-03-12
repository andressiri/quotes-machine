import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function SansSerifFF () {
  const {colors, quote, auto, groups, refs, custom} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fontFam, setFontFam] = custom.fontF;
  let sansSerifBGColor = imgBGColor;
  let sansSerifTxtColor = colorNumber;

  if (fontFam == 'Arial, Helvetica, sans-serif') {
    sansSerifBGColor = colorNumber;
    sansSerifTxtColor = imgBGColor;
  }; 

  function handleSansSerifFF () {
    setFontFam('Arial, Helvetica, sans-serif');
  };

  return (
    <button class={`customBtn fFam BG-color${sansSerifBGColor} text-color${sansSerifTxtColor}`} style={{fontFamily: "Arial, Helvetica, sans-serif"}} onClick={handleSansSerifFF}>Aa</button>
  );
};

export default SansSerifFF;