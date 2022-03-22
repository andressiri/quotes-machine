import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedEditBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const redirectTo = useRedirectTo();
  
  function handleSavedEditBtn () {
    redirectTo('/wall/savedEdit');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleSavedEditBtn} icon="pen" />
  );
};

export default SavedEditBtn;