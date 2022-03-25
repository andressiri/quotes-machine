import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../../Context.js';

function EmailVerifyBtn () {
  const {colors, refs, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = timers.send;
  const [sendWaitMsg, setSendWaitMsg] = timers.sendWait;
  const [isLoading, setIsLoading] = useState(false);   
  let isBlocked = false;

  if (sendEmailBtnTimer !== 0) isBlocked = true;   
  
  async function handleSendEmailVerify(event) {
    event.preventDefault();
    if (isLoading) return;
    if (isBlocked) return setSendWaitMsg(true);
    setIsLoading(true);
    const msgArray = [];
    const response  = await fetch('/users/sendVerifyEmail'); 
    let json = await response.json();
    setEmailToUpdate('To check if code was requested');
    setSendEmailBtnTimer(10);
    msgArray.push(json.message);
    setMessagesArray(msgArray);
    setIsLoading(false);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSendEmailVerify}
    >{isBlocked ? `${sendEmailBtnTimer}s`: 'Send Email'}
    </button>
  );
};

export default EmailVerifyBtn;