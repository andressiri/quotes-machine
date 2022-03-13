import React, {useContext} from "react";
import {Context} from "../../Context.js";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleShareTxt} icon="file-word" />
  );
};

export default ShareTxtBtn;