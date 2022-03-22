import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function BoldFont () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [boldFont, setBoldFont] = edit.boldF;
  let boldBGColor = imgBGColor;
  let boldTxtColor = colorNumber;

  if (boldFont === 'bold') {
    boldBGColor = colorNumber;
    boldTxtColor = imgBGColor;
  }; 

  function handleBoldFont () {
    if (boldFont === 'normal') {
      setBoldFont('bold');
    } else {
      setBoldFont('normal');
    };
  };

  return (
    <button className={`editBtn fFam BG-color${boldBGColor} text-color${boldTxtColor}`} style={{fontWeight: 'bold'}} onClick={handleBoldFont}>N</button>
  );
};

export default BoldFont;