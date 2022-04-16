import React, {useContext, useState} from 'react';
import {Context} from '../../../../Context.js';
import validateEmail from '../../../../functions/validateEmail.js';

function EmailForgotPasswordBtn () {
  const {colors, refs, forms, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const [emailValue, setEmailValue] = forms.email;
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = timers.send;
  const [sendWaitMsg, setSendWaitMsg] = timers.sendWait;
  const [isLoading, setIsLoading] = useState(false);
  let isBlocked = false;

  if (sendEmailBtnTimer !== 0) isBlocked = true;

  const handleSendEmailForgotPassword = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (isBlocked) return setSendWaitMsg(true);
    if (emailValue === '') return setMessage('Please enter your email');
    if (!validateEmail(emailValue)) return setMessage('Please enter a valid email');
    setIsLoading(true);
    const response = await fetch('/api/users/email/send/password-reset-code', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: emailValue
      }),
    });
    const json = await response.json();
    setMessage(json.message);
    setSendEmailBtnTimer(10);
    if (response.status === 201) emailReference.current = emailValue;
    setIsLoading(false);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSendEmailForgotPassword}
    >{isBlocked ? `${sendEmailBtnTimer}s`: 'Send Email'}</button>
  );
};

export default EmailForgotPasswordBtn;