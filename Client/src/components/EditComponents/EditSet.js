import React from 'react';
import {useLocation} from 'react-router-dom';
import BackgroundColor from './backgroundColor/BackgroundColor.js';
import TextColor from './textColor/TextColor.js';
import FontStyle from './fontStyle/FontStyle.js'
import SharingEditCancelBtn from './cancelButtons/SharingEditCancelBtn.js';
import SharingEditOkBtn from './editOkButtons/SharingEditOkBtn.js';
import OptionsEditCancelBtn from './cancelButtons/OptionsEditCancelBtn.js';
import OptionsEditOkBtn from './editOkButtons/OptionsEditOkBtn.js';
import WallEditCancelBtn from './cancelButtons/WallEditCancelBtn.js';
import WallEditOkBtn from './editOkButtons/WallEditOkBtn.js';

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