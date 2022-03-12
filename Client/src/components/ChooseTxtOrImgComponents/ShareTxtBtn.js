import React, {useContext} from "react";
import {Context} from "../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";
import useShareTxt from '../../functions/useShareTxt.js';

function ShareTxtBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareTxt = useShareTxt(); 
  const navigate = useNavigate();
   
  
  function handleShareTxt () {
    shareTxt();
    setShareChosen(``);
    navigate('/');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleShareTxt} icon={faReply} />
  );
};

export default ShareTxtBtn;