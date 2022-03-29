import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function EditAndShareImgBtn ({parentToChild}) {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const redirectTo = useRedirectTo();
  
  function handleEditAndShareImgBtn () {
    setConfigBackup(parentToChild.config);
    redirectTo('/box/editSharing');
  };  

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleEditAndShareImgBtn}
      icon="pen" />
  );
};

export default EditAndShareImgBtn;