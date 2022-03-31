import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../../Context.js';

function EmailVerifyBtn () {
  const {colors, refs, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
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
    const response  = await fetch('/users/sendVerifyEmail'); 
    let json = await response.json();
    setMessage(json.message);
    setSendEmailBtnTimer(10);
    if (json.message === 'Email sent with the code') emailReference.current = 'To check if code was requested';
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