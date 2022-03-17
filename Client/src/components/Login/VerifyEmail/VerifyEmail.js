import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import EmailVerifyBtn from './EmailVerifyBtn.js';
import CodeInput from '../CodeInput.js';
import CheckCodeBtn from '../CheckCodeBtn.js';
import useLogout from '../../../functions/useLogout.js';

function VerifyEmail() {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const logout = useLogout();

  function handleGoToLogin() {
    setEmailToUpdate('');
    logout();
  };

  return (
    <div>
      <p className={`shareIt`} >Get the code from your email in order to verify your id</p>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <EmailVerifyBtn />
      <form id='codeForm'>
        <CodeInput />
        <CheckCodeBtn />
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>Log Out</h2>
    </div>
  );
}

export default VerifyEmail;