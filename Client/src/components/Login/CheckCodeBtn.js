import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';

function CheckCodeBtn () {
  const {colors, refs, forms, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [verified, setVerified] = refs.ver;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
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
    console.log(emailToUpdate);
    if (emailToUpdate === '') return setMessagesArray(['No code was requested yet']);
    if (codeValue === '') return setMessagesArray(['Please enter the code sent']);
    setIsLoading(true);
    let auxBool = true; //State won't update for final check, so isLoading can't be used in the conditional. Without that conditional isLoading would be updated after redirect leading to the error: "Can't perform a React state update on an unmounted component"
    const msgArray = [];
    const response = await fetch("/users/verifyEmail", {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        code: codeValue,
        email: emailToUpdate  
        })
    });
    let json = await response.json();
    if (json.message === 'Code is correct') {
      setIsLoading(false);
      auxBool = false
      if (loggedIn) {
        setVerified(true);
        redirectTo('/box/loggedIn');
      } else {
        redirectTo('/box/changePassword'); 
      };
    } else {
      setCheckCodeBtnTimer(5);      
      msgArray.push(json.message);
    };
    setMessagesArray(msgArray);
    if (auxBool) setIsLoading(false);  // final check
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