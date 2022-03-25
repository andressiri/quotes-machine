import React from "react";
import BackgroundColor from './backgroundColor/BackgroundColor.js';
import TextColor from './textColor/TextColor.js';
import FontStyle from './FontStyle/FontStyle.js'
import EditCancelBtn from './EditCancelBtn.js';
import EditOkBtn from './EditOkBtn.js';

function EditSet ({parentToChild}) {
  return (
    <div>
      <BackgroundColor parentToChild={parentToChild} />
      <TextColor parentToChild={parentToChild} />
      <FontStyle parentToChild={parentToChild} />
      <EditCancelBtn parentToChild={parentToChild} />    
      <EditOkBtn parentToChild={parentToChild} />    
    </div>    
  );
};

export default EditSet;