import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useShareTxt from '../../functions/sharingFunctions/useShareTxt.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ShareTextBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const {config} = parentToChild;
  const shareTxt = useShareTxt(); 
  const redirectTo = useRedirectTo();   
  
  function handleShareTextBtn () {
    shareTxt(config);
    setMessage(`Quote has been shared on ${shareChosen.current}`);
    shareChosen.current = '';
    let redirectPath = '/box/message';
    if (config._id !== 'This was called by QuoteBox') redirectPath = `/wall/${config._id}/message`;
    redirectTo(redirectPath);
  };  

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleShareTextBtn}
      icon="file-word" />
  );
};

export default ShareTextBtn;