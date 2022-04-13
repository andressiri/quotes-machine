import React from 'react';
import {Routes, Route } from 'react-router-dom';
import StartingWallComponents from './wallStartingComponents/StartingWallComponents.js';
import WallMessages from './wallMessages/WallMessages.js';
import WallSharingContainer from './sharing/WallSharingContainer.js';
import WallShareChoice from './sharing/WallShareChoice.js';
import EditSet from '../editComponents/EditSet.js';
import WallDeleteConfirmation from './delete/WallDeleteConfirmation.js';

function WallRouter({parentToChild}) {
  const {config} = parentToChild;

  return (
    <div className={`routeContainer BG-color${config.imgBG}`}>
      <Routes>
        <Route path={`/*`} exact element={<StartingWallComponents parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/message`} exact element={<WallMessages parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/sharing`} exact element={<WallSharingContainer parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/sharing/choice`} exact element={<WallShareChoice parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/edit`} exact element={<EditSet parentToChild={parentToChild} />} />
        <Route path={`/${config._id}/delete/confirmation`} exact element={<WallDeleteConfirmation parentToChild={parentToChild} />} />
      </Routes>
    </div>
  );
};

export default WallRouter;