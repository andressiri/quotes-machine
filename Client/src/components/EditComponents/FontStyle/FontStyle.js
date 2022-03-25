import React from "react";
import SansSerifFF from './SansSerifFF.js';
import SerifFF from './SerifFF.js';
import MonospaceFF from './MonospaceFF.js';
import CursiveFF from './CursiveFF.js';
import FantasyFF from './FantasyFF.js';
import BoldFont from "./BoldFont.js";
import ItalicFont from "./ItalicFont.js";
import UppercaseFont from "./UppercaseFont.js";
import FontSize from "./FontSize.js";

function FontStyle ({parentToChild}) {

  return (
    <div className={`editGroup BG-color${parentToChild.config.imgBG} text-color${parentToChild.config.colorNum}`}>
      <p className={`text-color${parentToChild.config.colorNum}`}  style={{marginRight: "5px"}}>Style</p>
      <div>
        <SansSerifFF parentToChild={parentToChild} />
        <SerifFF parentToChild={parentToChild} />
        <MonospaceFF parentToChild={parentToChild} />
        <CursiveFF parentToChild={parentToChild} />
        <FantasyFF parentToChild={parentToChild} />
        <BoldFont parentToChild={parentToChild} />
        <ItalicFont parentToChild={parentToChild} />
        <UppercaseFont parentToChild={parentToChild} />
        <FontSize parentToChild={parentToChild} />
      </div>
      <p className={`text-color${parentToChild.config.colorNum}`} style={{marginLeft: "5px"}}>Style</p>
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