import React from 'react';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallSharingBtn({parentToChild}) {
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleWallSharingBtn = () => {
    redirectTo(`/${wall}/${config._id}/wallSharing`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallSharingBtn}
      icon='share-alt' />
  );
};

export default WallSharingBtn;