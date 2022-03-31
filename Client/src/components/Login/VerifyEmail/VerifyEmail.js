import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import EmailVerifyBtn from './EmailVerifyBtn.js';
import CodeInput from '../CodeInput.js';
import CheckCodeBtn from '../CheckCodeBtn.js';
import useLogout from '../../../functions/userFunctions/useLogout.js';

function VerifyEmail() {
  const {refs, timers} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = timers.check;
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = timers.send;
  const [sendWaitMsg, setSendWaitMsg] = timers.sendWait;
  const [checkWaitMsg, setCheckWaitMsg] = timers.sendWait;
  const logout = useLogout();

  function handleGoToLogin() {
    emailReference.current = '';
    logout();
  };

  return (
    <div>
      <p className={`shareIt`}
        >Get the code from your email in order to verify your id</p>
      {message !== ''
        &&  <p className={`shareIt`}
              >{message}</p>}
      {(sendEmailBtnTimer !== 0 && sendWaitMsg)
        &&  <p className={`shareIt`}
              >You have to wait {sendEmailBtnTimer}s to send email again</p>}
      {(checkCodeBtnTimer !== 0 && checkWaitMsg)
        &&  <p className={`shareIt`}
              >You have to wait {checkCodeBtnTimer}s to check code again</p>}
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