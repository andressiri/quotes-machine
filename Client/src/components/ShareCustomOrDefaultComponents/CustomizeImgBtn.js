import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CustomizeImgBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const redirectTo = useRedirectTo();
  
  function handleCustomizeImg () {
    redirectTo('/edit');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleCustomizeImg} icon="pen" />
  );
};

export default CustomizeImgBtn;