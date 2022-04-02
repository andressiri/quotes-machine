import React from 'react';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SavedEditBtn ({parentToChild}) {
  const {config} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleSavedEditBtn = () => {
    redirectTo(`/wall/${config._id}/editSaved`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSavedEditBtn}
      icon='pen' />
  );
};

export default SavedEditBtn;