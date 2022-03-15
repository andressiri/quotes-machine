import React, {useContext} from "react";
import {Context} from "../Context.js";
import { useLocation } from "react-router-dom";
import useRedirectTo from "../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CancelBtn () {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [messagesArray, setMessagesArray] = refs.msg;
  const redirectTo = useRedirectTo();
  const location = useLocation();
  let hideCancelBtn = true;

  if (location.pathname !== '/') {
    hideCancelBtn = false;
  }; 

  function handleShareCancel () {
    setMessagesArray([]);
    setShareChosen('');
    redirectTo('/');
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