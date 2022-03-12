import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import WhiteBG from './WhiteBG.js';
import RedBG from './RedBG.js';
import OrangeBG from './OrangeBG.js';
import YellowBG from './YellowBG.js';
import GreenBG from './GreenBG.js';
import BlueBG from './BlueBG.js';
import IndigoBG from './IndigoBG.js';
import VioletBG from './VioletBG.js';
import BlackBG from './BlackBG.js';

function BackgroundColor () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
    <div className={`customGroup BG-color${imgBGColor} text-color${colorNumber}`}>
      <p className={`text-color${colorNumber}`}  style={{marginRight: "5px"}}>BackG</p>
      <div>
        <WhiteBG />
        <RedBG />
        <OrangeBG />
        <YellowBG />
        <GreenBG />
        <BlueBG />
        <IndigoBG />
        <VioletBG />
        <BlackBG />
      </div>
      <p className={`text-color${colorNumber}`} style={{marginLeft: "5px"}}>BackG</p>
    </div>    
  );
};

export default BackgroundColor;