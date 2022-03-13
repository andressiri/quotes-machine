import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function CursiveFF () {
  const {colors, custom} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fontFam, setFontFam] = custom.fontF;
  let cursiveBGColor = imgBGColor;
  let cursiveTxtColor = colorNumber;

  if (fontFam === '"Brush Script MT", cursive') {
    cursiveBGColor = colorNumber;
    cursiveTxtColor = imgBGColor;
  }; 

  function handleCursiveFF () {
    setFontFam('"Brush Script MT", cursive');
  };

  return (
    <label>
      <button className={`customBtn fFam BG-color${cursiveBGColor} text-color${cursiveTxtColor}`} style={{fontFamily: '"Brush Script MT", cursive'}} onClick={handleCursiveFF}><div id="cursiveBtn">Aa</div></button>

    </label>
  );
};

export default CursiveFF;