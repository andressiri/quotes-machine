import React, {useContext} from "react";
import {Context} from "./../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ShareImgBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const navigate = useNavigate();
   
  function handleShareImg () {
    navigate('/customOrDefault');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleShareImg} icon="image" />
  );
};

export default ShareImgBtn;