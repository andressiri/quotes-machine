import React from "react";
import BackgroundColor from './backgroundColor/BackgroundColor.js';
import TextColor from './textColor/TextColor.js';
import SendCustomBtn from './SendCustomBtn.js';
import FontStyle from './FontStyle/FontStyle.js'
import './../../styles/customImgBtns.scss';

function EditSet () {
  return (
    <div>
      <TextColor />
      <BackgroundColor />
      <FontStyle />
      <SendCustomBtn />    
    </div>    
  );
};

export default EditSet;