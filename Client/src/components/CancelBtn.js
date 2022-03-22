import React, {useContext} from "react";
import {Context} from "../Context.js";
import { useLocation } from "react-router-dom";
import useRedirectTo from "../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CancelBtn () {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const redirectTo = useRedirectTo();
  const location = useLocation();
  let hideCancelBtn = true;

  if (location.pathname !== '/box/app') {
    hideCancelBtn = false;
  }; 

  function handleCancel () {
    setEmailToUpdate('');
    setMessagesArray([]);
    setShareChosen('');
    redirectTo('/box/app');
  };
  
  if (hideCancelBtn) {
    return (
      <div/>
    );
  } else {
    return (
      <FontAwesomeIcon className={`icon cancel`} onClick={handleCancel} icon="times" />
    );
  };
};

export default CancelBtn;