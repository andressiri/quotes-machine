import React, {useContext} from "react";
import {Context} from "../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import useShareImg from '../../functions/useShareImg.js';

function SendCustomBtn () {
  const {colors, refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const shareImg = useShareImg();
  const navigate = useNavigate();  
  
  async function handleSendCustom () {
    await shareImg();
    setShareChosen('');
    navigate('/');
    setImgBGColor(8);
  }; 

  return (
    <FontAwesomeIcon class={`icon`} onClick={handleSendCustom} icon={faStar} />
  );
};

export default SendCustomBtn;