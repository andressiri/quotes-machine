import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function FantasyFF () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fontFam, setFontFam] = edit.fontF;
  let fantasyBGColor = imgBGColor;
  let fantasyTxtColor = colorNumber;

  if (fontFam === 'Copperplate, Papyrus, fantasy') {
    fantasyBGColor = colorNumber;
    fantasyTxtColor = imgBGColor;
  }; 

  function handleFantasyFF () {
    setFontFam('Copperplate, Papyrus, fantasy');
  };

  return (
    <label>
      <button className={`editBtn fFam BG-color${fantasyBGColor} text-color${fantasyTxtColor}`} style={{fontFamily: "Copperplate, Papyrus, fantasy"}} onClick={handleFantasyFF}><div id="fantasyBtn">Aa</div></button>
    </label>
  );
};

export default FantasyFF;