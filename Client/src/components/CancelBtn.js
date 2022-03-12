import React, {useContext} from "react";
import {Context} from "../Context.js";
import { useNavigate, useLocation } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";

function CancelBtn () {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [messagesArray, setMessagesArray] = refs.msg;
  const navigate = useNavigate();
  const location = useLocation();
  let hideCancelBtn = true;

  if (location.pathname !== '/') {
    hideCancelBtn = false;
  }; 

  function handleShareCancel () {
    setMessagesArray([]);
    navigate('/');
    setShareChosen('');
  };
  
  if (hideCancelBtn) {
    return (
      <div/>
    );
  } else {
    return (
      <FontAwesomeIcon class={`icon cancel`} onClick={handleShareCancel} icon={faReply} />
    );
  };
};

export default CancelBtn;