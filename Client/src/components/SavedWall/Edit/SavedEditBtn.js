import React from "react";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedEditBtn ({parentToChild}) {
  const redirectTo = useRedirectTo();
  
  function handleSavedEditBtn () {
    redirectTo(`/wall/${parentToChild.config._id}/savedEdit`);
  };  

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${parentToChild.config.colorNum} text-color${parentToChild.config.imgBG}`} onClick={handleSavedEditBtn} icon="pen" />
  );
};

export default SavedEditBtn;