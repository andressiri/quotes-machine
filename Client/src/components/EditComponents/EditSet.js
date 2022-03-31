import React from "react";
import {useLocation} from 'react-router-dom';
import BackgroundColor from './BackgroundColor/BackgroundColor.js';
import TextColor from './TextColor/TextColor.js';
import FontStyle from './FontStyle/FontStyle.js'
import SharingEditCancelBtn from './CancelButtons/SharingEditCancelBtn.js';
import SharingEditOkBtn from './EditOkButtons/SharingEditOkBtn.js';
import OptionsEditCancelBtn from "./CancelButtons/OptionsEditCancelBtn.js";
import OptionsEditOkBtn from "./EditOkButtons/OptionsEditOkBtn.js";
import WallEditCancelBtn from "./CancelButtons/WallEditCancelBtn.js";
import WallEditOkBtn from "./EditOkButtons/WallEditOkBtn.js";

function EditSet ({parentToChild}) {
  const location = useLocation();

  return (
    <div>
      <BackgroundColor parentToChild={parentToChild} />
      <TextColor parentToChild={parentToChild} />
      <FontStyle parentToChild={parentToChild} />
      {location.pathname === '/box/editSharing'
        ? <div>
            <SharingEditCancelBtn />    
            <SharingEditOkBtn parentToChild={parentToChild} />
          </div>
        : location.pathname === '/box/editConfig'
          ? <div>    
              <OptionsEditCancelBtn parentToChild={parentToChild} />    
              <OptionsEditOkBtn parentToChild={parentToChild} />
            </div>
          : <div>
              <WallEditCancelBtn parentToChild={parentToChild} />    
              <WallEditOkBtn parentToChild={parentToChild} />
            </div>        
      }
    </div>    
  );
};

export default EditSet;