import React, { useContext } from "react";
import { Context } from "../../Context.js";
import {Routes, Route } from 'react-router-dom';
import StartingWallComponents from "./WallStartingComponents/StartingWallComponents.js";
import SavedSharingContainer from './Sharing/SavedSharingContainer.js';
import EditSet from "../EditComponents/EditSet.js";

function WallContainer({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [colorNumber, setColorNumber] = colors.colorNum;

  return (
    <div className={`routeContainer BG-color${imgBGColor}`}>
      <Routes>
        <Route path='/' exact element={<StartingWallComponents />} />
        <Route path='/savedSharing' exact element={<SavedSharingContainer />} />
        <Route path='/savedEdit' exact element={<EditSet />} />        
      </Routes>
    </div>
  );
}

export default WallContainer;