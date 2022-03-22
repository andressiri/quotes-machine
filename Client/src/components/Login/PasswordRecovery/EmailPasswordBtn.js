import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../../Context.js';
import validateEmail from '../../../functions/validateEmail.js';

function EmailPasswordBtn () {
  const {colors, refs, forms, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [emailValue, setEmailValue] = forms.email;
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = timers.send;
  const [sendWaitMsg, setSendWaitMsg] = timers.sendWait;
  const [isLoading, setIsLoading] = useState(false);   
  let isBlocked = false;

  if (sendEmailBtnTimer !== 0) isBlocked = true;

  async function handleSendEmailPassword(event) {
    event.preventDefault();
    if (isLoading) return;
    if (isBlocked) return setSendWaitMsg(true);
    if (emailValue === '') return setMessagesArray(['Please enter your email']);
    if (!validateEmail(emailValue)) return setMessagesArray(['Please enter a valid email']);
    setIsLoading(true);
    const auxArray = [];    
    const response = await fetch('/users/sendChangePassword', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: emailValue
      }),
    });
    let json = await response.json();
    auxArray.push(json.message);
    console.log(json.message);
    console.log(emailValue);
    if (json.message === 'Email sent with the code') setEmailToUpdate(emailValue);
    setSendEmailBtnTimer(10);
    setMessagesArray(auxArray);
    setIsLoading(false);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSendEmailPassword}
    >{isBlocked ? `${sendEmailBtnTimer}s`: 'Send Email'}
    </button>
  );
};

export default EmailPasswordBtn;