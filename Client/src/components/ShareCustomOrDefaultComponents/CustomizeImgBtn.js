import React, {useContext} from "react";
import {Context} from "../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CustomizeImgBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [currentPath, setCurrentPath] = refs.path;
  const navigate = useNavigate();
  
  function handleCustomizeImg () {
    setCurrentPath('/edit');
    navigate('/edit');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleCustomizeImg} icon="pen" />
  );
};

export default CustomizeImgBtn;