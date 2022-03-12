import React, {useContext} from "react";
import {Context} from "./../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";

function ShareImgBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const navigate = useNavigate();
   
  function handleShareImg () {
    navigate('/customOrDefault');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleShareImg} icon={faReply} />
  );
};

export default ShareImgBtn;