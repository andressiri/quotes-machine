import React from 'react';
import {Routes, Route } from 'react-router-dom';
import StartingWallComponents from './wallStartingComponents/StartingWallComponents.js';
import WallSharingContainer from './sharing/WallSharingContainer.js';
import WallShareChoice from './sharing/WallShareChoice.js';
import EditSet from '../editComponents/EditSet.js';
import WallMessages from './wallMessages/WallMessages.js';
import WallDeleteConfirmation from './delete/WallDeleteConfirmation.js';

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