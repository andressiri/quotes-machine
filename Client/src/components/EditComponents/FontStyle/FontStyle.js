import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import SansSerifFF from './SansSerifFF.js';
import SerifFF from './SerifFF.js';
import MonospaceFF from './MonospaceFF.js';
import CursiveFF from './CursiveFF.js';
import FantasyFF from './FantasyFF.js';
import BoldFont from "./BoldFont.js";
import ItalicFont from "./ItalicFont.js";
import UppercaseFont from "./UppercaseFont.js";
import FontSize from "./FontSize.js";

function FontStyle () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
    <div className={`customGroup BG-color${imgBGColor} text-color${colorNumber}`}>
      <p className={`text-color${colorNumber}`}  style={{marginRight: "5px"}}>Style</p>
      <div>
        <SansSerifFF />
        <SerifFF />
        <MonospaceFF />
        <CursiveFF />
        <FantasyFF />
        <BoldFont />
        <ItalicFont />
        <UppercaseFont />
        <FontSize />
      </div>
      <p className={`text-color${colorNumber}`} style={{marginLeft: "5px"}}>Style</p>
    </div>    
  );
};

export default FontStyle;


//<AmericanTypewriterFF />
//        <AndaléMonoFF />
//        <MonacoFF />
//        <BradleyHandFF />
//        <BrushScriptMTFF />
//        <LuminariFF />
//        <ComicSansFF />