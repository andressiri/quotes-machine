import React from "react";
import WhiteTxt from './WhiteTxt.js';
import RedTxt from './RedTxt.js';
import OrangeTxt from './OrangeTxt.js';
import YellowTxt from './YellowTxt.js';
import GreenTxt from './GreenTxt.js';
import BlueTxt from './BlueTxt.js';
import IndigoTxt from './IndigoTxt.js';
import VioletTxt from './VioletTxt.js';
import BlackTxt from './BlackTxt.js';

function TextColor ({parentToChild}) {
  const {config} = parentToChild;
  
  return (
    <div className={`editGroup reSized BG-color${config.colorNum} text-color${config.imgBG}`}>
      <p className={`text-color${config.imgBG}`} style={{marginRight: "10px"}}>Text</p>
      <div>
        <WhiteTxt parentToChild={parentToChild} />
        <RedTxt parentToChild={parentToChild} />
        <OrangeTxt parentToChild={parentToChild} />
        <YellowTxt parentToChild={parentToChild} />
        <GreenTxt parentToChild={parentToChild} />
        <BlueTxt parentToChild={parentToChild} />
        <IndigoTxt parentToChild={parentToChild} />
        <VioletTxt parentToChild={parentToChild} />
        <BlackTxt parentToChild={parentToChild} />
      </div>
      <p className={`text-color${config.imgBG}`} style={{marginLeft: "10px"}}>Text</p>
   </div>    
  );
};

export default TextColor;