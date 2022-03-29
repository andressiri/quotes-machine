import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function EditImgBtn ({parentToChild}) {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const redirectTo = useRedirectTo();
  
  function handleEditImgBtn () {
    setConfigBackup(parentToChild.config);
    redirectTo('/box/edit');
  };  

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleEditImgBtn}
      icon="pen" />
  );
};

export default EditImgBtn;