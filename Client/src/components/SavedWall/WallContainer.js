import React from "react";
import {Routes, Route } from 'react-router-dom';
import StartingWallComponents from "./WallStartingComponents/StartingWallComponents.js";
import SavedSharingContainer from './Sharing/SavedSharingContainer.js';
import EditSet from "../EditComponents/EditSet.js";

function WallContainer({parentToChild}) {

  return (
    <div className={`routeContainer BG-color${parentToChild.config.imgBG}`}>
      <Routes>
        <Route path={`/*`} exact element={<StartingWallComponents parentToChild={parentToChild} />} />
        <Route path={`/${parentToChild.config._id}/savedSharing`} exact element={<SavedSharingContainer parentToChild={parentToChild} />} />
        <Route path={`/${parentToChild.config._id}/savedEdit`} exact element={<EditSet parentToChild={parentToChild} />} />        
      </Routes>
    </div>
  );
};

export default WallContainer;