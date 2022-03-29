import React from "react";
import WhiteBG from './WhiteBG.js';
import RedBG from './RedBG.js';
import OrangeBG from './OrangeBG.js';
import YellowBG from './YellowBG.js';
import GreenBG from './GreenBG.js';
import BlueBG from './BlueBG.js';
import IndigoBG from './IndigoBG.js';
import VioletBG from './VioletBG.js';
import BlackBG from './BlackBG.js';

function BackgroundColor ({parentToChild}) {
  const {config} = parentToChild;

  return (
    <div className={`editGroup BG-color${config.imgBG} text-color${config.colorNum}`}>
      <p className={`text-color${config.colorNum}`}  style={{marginRight: "5px"}}>BackG</p>
      <div>
        <WhiteBG parentToChild={parentToChild} />
        <RedBG parentToChild={parentToChild} />
        <OrangeBG parentToChild={parentToChild} />
        <YellowBG parentToChild={parentToChild} />
        <GreenBG parentToChild={parentToChild} />
        <BlueBG parentToChild={parentToChild} />
        <IndigoBG parentToChild={parentToChild} />
        <VioletBG parentToChild={parentToChild} />
        <BlackBG parentToChild={parentToChild} />
      </div>
      <p className={`text-color${config.colorNum}`} style={{marginLeft: "5px"}}>BackG</p>
    </div>    
  );
};

export default BackgroundColor;