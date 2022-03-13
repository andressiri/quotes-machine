import React, {useContext} from "react";
import {Context} from "../Context.js";
import { useNavigate, useLocation } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
      <FontAwesomeIcon className={`icon cancel`} onClick={handleShareCancel} icon="times" />
    );
  };
};

export default CancelBtn;