import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import { useNavigate } from "react-router-dom";
import useStopAuto from '../../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import './../../../styles/icon.scss';

function TwitterBtn() {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  const navigate = useNavigate();

  function handleTwitter () {
    stopAuto();
    setShareChosen('Twitter');
    navigate('/txtOrImg');
  };

  return (
    <FontAwesomeIcon class={`icon`} onClick={handleTwitter} icon={faTwitterSquare} />
  );
};

export default TwitterBtn;
