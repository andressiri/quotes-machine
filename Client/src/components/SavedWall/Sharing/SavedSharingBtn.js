import React from 'react';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SavedSharingBtn({parentToChild}) {
  const {config} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleSavedSharingBtn = () => {
    redirectTo(`/wall/${config._id}/wallSharing`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSavedSharingBtn}
      icon='share-alt' />
  );
};

export default SavedSharingBtn;