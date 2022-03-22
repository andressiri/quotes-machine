import React, {useContext} from "react";
import {Context} from "./../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ShareImgBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const redirectTo = useRedirectTo();
  
  function handleShareImg () {
    redirectTo('/box/customOrDefault');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleShareImg} icon="image" />
  );
};

export default ShareImgBtn;