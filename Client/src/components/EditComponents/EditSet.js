import React from "react";
import BackgroundColor from './backgroundColor/BackgroundColor.js';
import TextColor from './textColor/TextColor.js';
import EditOkBtn from './EditOkBtn.js';
import FontStyle from './FontStyle/FontStyle.js'

function EditSet () {
  return (
    <div>
      <TextColor />
      <BackgroundColor />
      <FontStyle />
      <EditOkBtn />    
    </div>    
  );
};

export default EditSet;