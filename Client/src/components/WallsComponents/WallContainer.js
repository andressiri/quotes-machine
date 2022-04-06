import React from 'react';
import {Routes, Route } from 'react-router-dom';
import StartingWallComponents from './WallStartingComponents/StartingWallComponents.js';
import WallSharingContainer from './Sharing/WallSharingContainer.js';
import WallShareChoice from './Sharing/WallShareChoice.js';
import EditSet from '../EditComponents/EditSet.js';
import WallMessages from './WallMessages/WallMessages.js';
import WallDeleteConfirmation from './Delete/WallDeleteConfirmation.js';

function WallContainer({parentToChild}) {
  const {config} = parentToChild;

  return (
    <div className={`routeContainer BG-color${config.imgBG}`}>
      <Routes>
        <Route path={`/*`} exact element={<StartingWallComponents parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/wallSharing`} exact element={<WallSharingContainer parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/wallShareChoice`} exact element={<WallShareChoice parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/wallEdit`} exact element={<EditSet parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/wallMessage`} exact element={<WallMessages parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/wallDeleteConfirm`} exact element={<WallDeleteConfirmation parentToChild={parentToChild} />} />
      </Routes>
    </div>
  );
};

export default WallContainer;