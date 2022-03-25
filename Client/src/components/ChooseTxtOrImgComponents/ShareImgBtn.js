import React, {useContext} from "react";
import {Context} from "./../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ShareImgBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const redirectTo = useRedirectTo();
  
  function handleShareImg () {    
    redirectTo('/box/editOrOk');
  };  

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleShareImg} icon="image" />
  );
};

export default ShareImgBtn;