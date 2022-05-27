import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useShareTxt from '../../functions/sharingFunctions/useShareTxt.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import validateEmail from '../../functions/validateEmail.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ShareTextBtn ({parentToChild}) {
  const {refs, forms} = useContext(Context);
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const [emailValue, setEmailValue] = forms.email;
  const {config, wall} = parentToChild;
  const shareTxt = useShareTxt();
  const redirectTo = useRedirectTo();
  
  const handleShareTextBtn = async () => {
    if (shareChosen.current === 'Email') {
      if (!validateEmail(emailValue)) return setMessage('Please enter a valid email');
      emailReference.current = emailValue;
    };
    const msg = await shareTxt(config);
    setTimeout(() => {  // Timeout to handle transition
      setMessage(msg);
      shareChosen.current = '';
    }, 250);
    let redirectPath = '/box/message';
    if (config._id !== 'This was called by QuoteBox') redirectPath = `/${wall}/${config._id}/message`;
    redirectTo(redirectPath);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleShareTextBtn}
      icon='file-word' />
  );
};

export default ShareTextBtn;