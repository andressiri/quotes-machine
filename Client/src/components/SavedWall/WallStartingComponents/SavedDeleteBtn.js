import React from "react";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedDeleteBtn ({parentToChild}) {
  const redirectTo = useRedirectTo();
  
  function handleSavedDeleteBtn () {
    console.log('deleted');
  };  

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${parentToChild.config.colorNum} text-color${parentToChild.config.imgBG}`} onClick={handleSavedDeleteBtn} icon="trash-alt" />
  );
};

export default SavedDeleteBtn;