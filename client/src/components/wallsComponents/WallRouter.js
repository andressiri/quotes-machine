import React, {useContext, useEffect, useRef} from 'react';
import {Context} from '../../Context.js';
import {Routes, Route} from 'react-router-dom';
import StartingWallComponents from './wallStartingComponents/StartingWallComponents.js';
import WallMessages from './wallMessages/WallMessages.js';
import WallSharingContainer from './sharing/WallSharingContainer.js';
import WallShareChoice from './sharing/WallShareChoice.js';
import EditSet from '../editComponents/EditSet.js';
import WallDeleteConfirmation from './delete/WallDeleteConfirmation.js';

function WallRouter({parentToChild}) {
  const {fade} = useContext(Context);
  const [fadeMenu, setFadeMenu] = fade.fadM;
  const {config} = parentToChild;
  const fadeDisabled = useRef('disabledFade');

  const activateFadeForThisContainer = () => {
    fadeDisabled.current = '';
  };
  useEffect(() => {
    if (fadeMenu === 'In') fadeDisabled.current = 'disabledFade';
  }, [fadeMenu]);

  return (
    <div
      className={`wallRouterContainer BG-color${config.imgBG} text-color${config.colorNum}`}
      onClick={activateFadeForThisContainer}
    >
      <div className={`fadeRoute${fadeMenu}${fadeDisabled.current}`}>
        <Routes>
          <Route path={`/*`} exact element={<StartingWallComponents parentToChild={parentToChild} />} />
          <Route path={`/${config._id}/message`} exact element={<WallMessages parentToChild={parentToChild} />} />
          <Route path={`/${config._id}/sharing`} exact element={<WallSharingContainer parentToChild={parentToChild} />} />
          <Route path={`/${config._id}/sharing/choice`} exact element={<WallShareChoice parentToChild={parentToChild} />} />
          <Route path={`/${config._id}/edit`} exact element={<EditSet parentToChild={parentToChild} />} />
          <Route path={`/${config._id}/delete/confirmation`} exact element={<WallDeleteConfirmation parentToChild={parentToChild} />} />
        </Routes>
      </div>
    </div>
  );
};

export default WallRouter;