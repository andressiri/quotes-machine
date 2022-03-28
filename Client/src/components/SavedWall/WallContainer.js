import React from "react";
import {Routes, Route } from 'react-router-dom';
import StartingWallComponents from "./WallStartingComponents/StartingWallComponents.js";
import SavedSharingContainer from './Sharing/SavedSharingContainer.js';
import EditSet from "../EditComponents/EditSet.js";
import WallMessages from "./WallMessages/WallMessages.js";
import DeleteQuoteConfirmation from "./Delete/DeleteQuoteConfirmation.js";

function WallContainer({parentToChild}) {

  return (
    <div className={`routeContainer BG-color${parentToChild.config.imgBG}`}>
      <Routes>
        <Route path={`/*`} exact element={<StartingWallComponents parentToChild={parentToChild} />} />
        <Route path={`/${parentToChild.config._id}/savedSharing`} exact element={<SavedSharingContainer parentToChild={parentToChild} />} />
        <Route path={`/${parentToChild.config._id}/savedEdit`} exact element={<EditSet parentToChild={parentToChild} />} />
        <Route path={`/${parentToChild.config._id}/message`} exact element={<WallMessages parentToChild={parentToChild} />} />                
        <Route path={`/${parentToChild.config._id}/deleteConfirm`} exact element={<DeleteQuoteConfirmation parentToChild={parentToChild} />} />                
      </Routes>
    </div>
  );
};

export default WallContainer;