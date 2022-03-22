import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedDeleteBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const redirectTo = useRedirectTo();
  
  function handleSavedDeleteBtn () {
    console.log('deleted');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleSavedDeleteBtn} icon="trash" />
  );
};

export default SavedDeleteBtn;