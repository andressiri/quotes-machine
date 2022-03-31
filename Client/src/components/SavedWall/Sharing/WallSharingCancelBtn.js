import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallSharingCancelBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const redirectTo = useRedirectTo();
  const {config} = parentToChild; 
  
  async function handleWallSharingCancelBtn () {
    if (shareChosen.current === 'Email') emailReference.current = '';
    setMessage('Sharing canceled');
    redirectTo(`/wall/${config._id}/message`);      
  }; 

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallSharingCancelBtn}
      icon='times' />
  );
};

export default WallSharingCancelBtn;