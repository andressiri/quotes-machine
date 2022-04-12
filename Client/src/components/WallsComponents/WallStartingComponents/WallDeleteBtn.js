import React from 'react';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallDeleteBtn ({parentToChild}) {
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleWallDeleteBtn = () => {
    redirectTo(`/${wall}/${config._id}/wallDeleteConfirm`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallDeleteBtn}
      icon='trash-alt' />
  );
};

export default WallDeleteBtn;