import React from 'react';
import SavedSharingBtn from '../Sharing/SavedSharingBtn.js';
import SavedEditBtn from '../Edit/SavedEditBtn.js';
import SavedDeleteBtn from './SavedDeleteBtn.js';

function StartingWallComponents() {
  return (
    <div>
      <SavedSharingBtn />
      <SavedEditBtn />
      <SavedDeleteBtn />
    </div>   
  );
};

export default StartingWallComponents;