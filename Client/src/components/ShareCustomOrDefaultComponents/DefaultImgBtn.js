import React, {useContext} from "react";
import {Context} from "../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareImg from '../../functions/useShareImg.js';

function DefaultImgBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [currentPath, setCurrentPath] = refs.path;
  const shareImg = useShareImg(); 
  const navigate = useNavigate(); 
  
  function handleDefaultImg () {
    shareImg();
    setShareChosen('');
    setCurrentPath('/');
    navigate('/');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleDefaultImg} icon="check" />
  );
};

export default DefaultImgBtn;