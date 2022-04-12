import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';

function CheckCodeBtn () {
  const {colors, refs, forms, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const auxRef = refs.aux;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const [codeValue, setCodeValue] = forms.code;
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = timers.check;
  const [checkWaitMsg, setCheckWaitMsg] = timers.sendWait;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();
  let isBlocked = false;

  if (checkCodeBtnTimer !== 0) isBlocked = true; 

  const handlePostCode = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (isBlocked) return setCheckWaitMsg(true);
    if (emailReference.current === '') return setMessage('No code was requested yet');
    if (codeValue === '') return setMessage('Please enter the code sent');
    setIsLoading(true);
    const response = await fetch('/users/email/verification', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        code: codeValue,
        email: emailReference.current
        })
    });
    const json = await response.json();
    if (response.status === 200) {
      setIsLoading(false);
      setTimeout(() => {  // Timeout to handle transition
        setMessage('');
      }, 250);
      //check if it is first verification or change password/name
      if (loggedIn && !verified) {
        setVerified(true);
        redirectTo('/box/app');
      } else {
        let path = '/box/changePassword';
        if (auxRef.current === 'name') path = '/box/changeName';
        redirectTo(path);
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
    >{isBlocked ? `${checkCodeBtnTimer}s`: 'Check Code'}</button>
  );
};

export default CheckCodeBtn;