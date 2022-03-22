import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function MonospaceFF () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fontFam, setFontFam] = edit.fontF;
  let monospaceBGColor = imgBGColor;
  let monospaceTxtColor = colorNumber;

  if (fontFam === '"Courier New", Courier, monospace') {
    monospaceBGColor = colorNumber;
    monospaceTxtColor = imgBGColor;
  }; 

  function handleMonospaceFF () {
    setFontFam('"Courier New", Courier, monospace');
  };

  return (
    <button className={`editBtn fFam BG-color${monospaceBGColor} text-color${monospaceTxtColor}`} style={{fontFamily: '"Courier New", Courier, monospace'}} onClick={handleMonospaceFF}><div id="monospaceBtn">Aa</div></button>
  );
};

export default MonospaceFF;