import React from 'react';
import SavedSharingBtn from '../Sharing/SavedSharingBtn.js';
import SavedEditBtn from '../Edit/SavedEditBtn.js';
import SavedDeleteBtn from '../Delete/SavedDeleteBtn.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function StartingWallComponents({parentToChild}) {
  const {config} = parentToChild;
  const epochTime = parseInt(config._id.substring(0, 8), 16);
  const savedDate = new Date(epochTime*1000).toLocaleDateString();
  const savedDateTime = new Date(epochTime*1000).toLocaleTimeString();

  return (
    <div>
      <SavedSharingBtn parentToChild={parentToChild} />
      <SavedEditBtn parentToChild={parentToChild} />
      <SavedDeleteBtn parentToChild={parentToChild} />
      <p className={`text-color${config.colorNum}`}>
      <FontAwesomeIcon className={`quoteIcon`} icon='globe-americas' /> 
      {` ${savedDate}`} at {savedDateTime}</p>
    </div>   
  );
};

export default StartingWallComponents;