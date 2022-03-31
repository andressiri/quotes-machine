import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';

function CheckCodeBtn () {
  const {colors, refs, forms, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const [verified, setVerified] = refs.ver;
  const emailReference = refs.email;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [codeValue, setCodeValue] = forms.code;
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = timers.check;
  const [checkWaitMsg, setCheckWaitMsg] = timers.sendWait;
  const [isLoading, setIsLoading] = useState(false);   
  const redirectTo = useRedirectTo();
  let isBlocked = false;

  if (checkCodeBtnTimer !== 0) isBlocked = true; 

  async function handlePostCode(event) {
    event.preventDefault();
    if (isLoading) return;
    if (isBlocked) return setCheckWaitMsg(true);
    if (emailReference.current === '') return setMessage('No code was requested yet');
    if (codeValue === '') return setMessage('Please enter the code sent');
    setIsLoading(true);
    const response = await fetch("/users/verifyEmail", {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        code: codeValue,
        email: emailReference.current  
        })
    });
    let json = await response.json();
    if (json.message === 'Code is correct') {
      setIsLoading(false);
      setTimeout(() => {  // Timeout to handle transition
        setMessage('');
      }, 250);
      if (loggedIn) {
        setVerified(true);
        redirectTo('/box/app');
      } else {
        redirectTo('/box/changePassword'); 
      };
    } else {
      setIsLoading(false);
      setCheckCodeBtnTimer(5);      
      setMessage(json.message);
    };
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handlePostCode}
    >{isBlocked ? `${checkCodeBtnTimer}s`: 'Check Code'}
    </button>
  );
};

export default CheckCodeBtn;