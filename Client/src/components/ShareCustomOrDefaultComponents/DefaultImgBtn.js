import React, {useContext} from "react";
import {Context} from "../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";
import useShareImg from '../../functions/useShareImg.js';

function DefaultImgBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareImg = useShareImg(); 
  const navigate = useNavigate(); 
  
  function handleDefaultImg () {
    shareImg();
    setShareChosen(``);
    navigate('/');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleDefaultImg} icon={faCrown} />
  );
};

export default DefaultImgBtn;