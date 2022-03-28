import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import PasswordInput from '../PasswordInput.js';
import Password2Input from '../Password2Input.js';
import ChangePasswordBtn from './ChangePasswordBtn.js';

function ChangePassword() {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const redirectTo = useRedirectTo();

  function handleGoToLogin() {
    setEmailToUpdate('');
    setTimeout(() => {  // Timeout to handle transition
      setMessagesArray([]);
    }, 250);
    redirectTo('/box/login');
  };

  return (
    <div>
      <p className={`shareIt`} >Create your new password</p>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <form id="registerForm">
        <PasswordInput />
        <Password2Input />
        <ChangePasswordBtn />
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>Go to login</h2>
    </div>
  );
};

export default ChangePassword;