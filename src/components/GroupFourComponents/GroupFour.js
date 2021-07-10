import React from "react";
import BackgroundColor from './backgroundColor/BackgroundColor.js';
import TextColor from './textColor/TextColor.js';
import SendCustomBtn from './SendCustomBtn.js';
import './../../styles/customImgBtns.scss';
import FontStyle from './FontStyle/FontStyle.js'

function GroupFour () {
  return (
    <div>
      <TextColor />
      <BackgroundColor />
      <FontStyle />
      <SendCustomBtn />    
    </div>    
  );
};

export default GroupFour;