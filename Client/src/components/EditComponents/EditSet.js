import React from 'react';
import {useLocation} from 'react-router-dom';
import BackgroundColor from './BackgroundColor/BackgroundColor.js';
import TextColor from './TextColor/TextColor.js';
import FontStyle from './FontStyle/FontStyle.js'
import SharingEditCancelBtn from './CancelButtons/SharingEditCancelBtn.js';
import SharingEditOkBtn from './EditOkButtons/SharingEditOkBtn.js';
import OptionsEditCancelBtn from './CancelButtons/OptionsEditCancelBtn.js';
import OptionsEditOkBtn from './EditOkButtons/OptionsEditOkBtn.js';
import WallEditCancelBtn from './CancelButtons/WallEditCancelBtn.js';
import SavedEditOkBtn from './EditOkButtons/SavedEditOkBtn.js';
import SearchEditOkBtn from './EditOkButtons/SearchEditOkBtn.js';

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
          : parentToChild.wall === 'savedWall'
            ? <div>
                <WallEditCancelBtn parentToChild={parentToChild} />
                <SavedEditOkBtn parentToChild={parentToChild} />
              </div>
            : <div>
                <WallEditCancelBtn parentToChild={parentToChild} />
                <SearchEditOkBtn parentToChild={parentToChild} />
              </div>
      }
    </div>
  );
};

export default EditSet;