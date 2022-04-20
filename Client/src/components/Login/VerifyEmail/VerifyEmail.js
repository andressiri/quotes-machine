import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import Message from '../../Message.js';
import EmailVerifyBtn from './EmailVerifyBtn.js';
import CodeInput from '../CodeInput.js';
import CheckCodeBtn from '../CheckCodeBtn.js';
import useLogout from '../../../functions/userFunctions/useLogout.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function VerifyEmail() {
  const {colors, refs, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const [verified, setVerified] = refs.ver;
  const emailReference = refs.email;
  const auxRef = refs.aux;
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = timers.check;
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = timers.send;
  const [sendWaitMsg, setSendWaitMsg] = timers.sendWait;
  const [checkWaitMsg, setCheckWaitMsg] = timers.sendWait;
  const logout = useLogout();
  const redirectTo = useRedirectTo();
  // Difference between first verification and change password/name verification
  let auxString = 'Log out';
  if (verified) auxString = 'Go back';

  const handleGoBack = () => {
    emailReference.current = '';
    if (verified) {
      auxRef.current = '';
      redirectTo('/box/logged-in');
    } else {
      logout();
    };
  };

  return (
    <div className={'routeColumnContainer'}>
    <Message parentToChild={{
      defaultMessage: 'Get the code from your email to verify your id',
      waitMessage: '',
      config: {
        colorNum: colorNumber,
        imgBG: imgBGColor
      }
    }} />
    {(sendEmailBtnTimer !== 0 && sendWaitMsg)
      && <Message parentToChild={{
          waitMessage: `You have to wait ${sendEmailBtnTimer}s to send email again`,
          defaultMessage: '',
          config: {
            colorNum: colorNumber,
            imgBG: imgBGColor
          }
        }} />
    }
    {(checkCodeBtnTimer !== 0 && checkWaitMsg)
      && <Message parentToChild={{
          waitMessage: `You have to wait ${checkCodeBtnTimer}s to check code again`,
          defaultMessage: '',
          config: {
            colorNum: colorNumber,
            imgBG: imgBGColor
          }
        }} />
    }
      <EmailVerifyBtn />
      <form id='codeForm'>
        <CodeInput />
        <CheckCodeBtn />
      </form>
      <h3 className={'pointer containerText'} onClick={handleGoBack}>{auxString}</h3>
    </div>
  );
}

export default VerifyEmail;