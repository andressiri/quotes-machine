import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import EmailInput from '../EmailInput.js';
import EmailPasswordBtn from './EmailPasswordBtn.js';
import CodeInput from '../CodeInput.js';
import CheckCodeBtn from '../CheckCodeBtn.js';
import useLogout from '../../../functions/useLogout.js';

function ForgotPassword() {
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
      <form id='sendEmail'>
        <EmailInput />
        <EmailPasswordBtn />
      </form>
      <form id="codeForm">
        <CodeInput />
        <CheckCodeBtn />
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>Go to login</h2>
    </div>
  );
}

export default ForgotPassword;