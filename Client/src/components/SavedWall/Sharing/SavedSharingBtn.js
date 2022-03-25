import React from "react";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedSharingBtn({parentToChild}) {
  const redirectTo = useRedirectTo();

  async function handleSavedSharingBtn () {
    redirectTo(`/wall/${parentToChild.config._id}/savedSharing`);        
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${parentToChild.config.colorNum} text-color${parentToChild.config.imgBG}`} onClick={handleSavedSharingBtn} icon='share-alt' />
  );
};

export default SavedSharingBtn;