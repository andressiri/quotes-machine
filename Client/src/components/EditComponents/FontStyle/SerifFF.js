import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function SerifFF () {
  const {colors, custom} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fontFam, setFontFam] = custom.fontF;
  let serifBGColor = imgBGColor;
  let serifTxtColor = colorNumber;

  if (fontFam == 'Garamond, serif') {
    serifBGColor = colorNumber;
    serifTxtColor = imgBGColor;
  }; 

  function handleSerifFF () {
    setFontFam('Garamond, serif');
  };

  return (
    <button class={`customBtn fFam BG-color${serifBGColor} text-color${serifTxtColor}`} style={{fontFamily: "Garamond, serif"}} onClick={handleSerifFF}>Aa</button>
  );
};

export default SerifFF;