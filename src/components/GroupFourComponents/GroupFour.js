import React from "react";
import BackgroundColor from './backgroundColor/BackgroundColor.js';
import TextColor from './textColor/TextColor.js';
import SendCustomBtn from './SendCustomBtn.js';
import './../../styles/customImgBtns.scss';

function GroupFour () {
  return (
    <div>
      <TextColor />
      <BackgroundColor />
      <SendCustomBtn />    
    </div>    
  );
};

export default GroupFour;