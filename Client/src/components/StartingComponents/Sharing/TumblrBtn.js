import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import { useNavigate } from "react-router-dom";
import useStopAuto from '../../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../../../styles/icon.scss';

function TumblrBtn() {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  const navigate = useNavigate();
  
  async function handleTumblr () {
    stopAuto();
    setShareChosen('Tumblr');
    navigate('/txtOrImg');
  };  

  return (    
    <FontAwesomeIcon className={`icon`} onClick={handleTumblr} icon={["fab", "tumblr-square"]} />
  );
};

export default TumblrBtn;