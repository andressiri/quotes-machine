import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import useShareImg from '../../functions/sharingFunctions/useShareImg.js';
import validateEmail from '../../functions/validateEmail.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ShareImageBtn ({parentToChild}) {
  const {refs, forms} = useContext(Context);
  const quoteRef = refs.refImg;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const [emailValue, setEmailValue] = forms.email;
  const [isLoading, setIsLoading] = useState(false);
  const {config, wall} = parentToChild;
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();
  let loading = 'notLoading';
  if (isLoading) loading = 'loading';
  
  const handleShareImageBtn = async () => {
    setIsLoading(true);
    if (shareChosen.current === 'Email') {
      if (!validateEmail(emailValue)) return setMessage('Please enter a valid email');
      emailReference.current = emailValue;
    };
    let redirectPath = '/box/message';
    let msg = '';
    if (config._id !== 'This was called by QuoteBox') {
      redirectPath = `/${wall}/${config._id}/message`;
      msg = await shareImg(window[`ref${config._id}`], config);
    } else {
      msg = await shareImg(quoteRef, config);
    };
    setTimeout(() => {  // Timeout to handle transition
      setMessage(msg);
      shareChosen.current = '';
    }, 250);
    setIsLoading(false);
    redirectTo(redirectPath);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn ${loading}Opacity BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleShareImageBtn}
      icon='image' />
  );
};

export default ShareImageBtn;