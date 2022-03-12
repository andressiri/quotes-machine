import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import WhiteTxt from './WhiteTxt.js';
import RedTxt from './RedTxt.js';
import OrangeTxt from './OrangeTxt.js';
import YellowTxt from './YellowTxt.js';
import GreenTxt from './GreenTxt.js';
import BlueTxt from './BlueTxt.js';
import IndigoTxt from './IndigoTxt.js';
import VioletTxt from './VioletTxt.js';
import BlackTxt from './BlackTxt.js';

function TextColor () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
   <div className={`customGroup reSized BG-color${colorNumber} text-color${imgBGColor}`}>
     <p className={`text-color${imgBGColor}`} style={{marginRight: "10px"}}>Text</p>
     <div>
     <WhiteTxt />
     <RedTxt />
     <OrangeTxt />
     <YellowTxt />
     <GreenTxt />
     <BlueTxt />
     <IndigoTxt />
     <VioletTxt />
     <BlackTxt />
     </div>
     <p className={`text-color${imgBGColor}`} style={{marginLeft: "10px"}}>Text</p>
   </div>    
  );
};

export default TextColor;