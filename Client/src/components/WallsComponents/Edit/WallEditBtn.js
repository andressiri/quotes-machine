import React from 'react';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallEditBtn ({parentToChild}) {
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleWallEditBtn = () => {
    redirectTo(`/${wall}/${config._id}/wallEdit`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallEditBtn}
      icon='pen' />
  );
};

export default WallEditBtn;