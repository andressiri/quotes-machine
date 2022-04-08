import React, {useContext, useState} from 'react';
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
  
  const handleSendEmailVerify = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (isBlocked) return setSendWaitMsg(true);
    setIsLoading(true);
    const response  = await fetch('/users/sendVerifyEmail'); 
    const json = await response.json();
    setMessage(json.message);
    setSendEmailBtnTimer(10);
    if (response.status === 201) emailReference.current = json.userEmail;
    setIsLoading(false);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSendEmailVerify}
    >{isBlocked ? `${sendEmailBtnTimer}s`: 'Send Email'}</button>
  );
};

export default EmailVerifyBtn;