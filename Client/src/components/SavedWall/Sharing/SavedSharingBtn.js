import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedSharingBtn() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const redirectTo = useRedirectTo();

  async function handleSavedSharingBtn () {
    redirectTo('/wall/savedSharing');        
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleSavedSharingBtn} icon="share-alt" />
  );
};

export default SavedSharingBtn;