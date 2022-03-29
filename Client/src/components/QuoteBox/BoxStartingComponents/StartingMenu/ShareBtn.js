import React, {useContext} from "react";
import {Context} from "../../../../Context.js";
import useRedirectTo from "../../../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ShareBtn() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const redirectTo = useRedirectTo();

  async function handleShareBtn () {
    redirectTo('/box/sharing');        
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleShareBtn}
      icon="share-alt" />
  );
};

export default ShareBtn;