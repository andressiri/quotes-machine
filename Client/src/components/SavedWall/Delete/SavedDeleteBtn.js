import React from 'react';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SavedDeleteBtn ({parentToChild}) {
  const {config} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleSavedDeleteBtn = () => {
    redirectTo(`/wall/${config._id}/deleteConfirm`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSavedDeleteBtn}
      icon='trash-alt' />
  );
};

export default SavedDeleteBtn;