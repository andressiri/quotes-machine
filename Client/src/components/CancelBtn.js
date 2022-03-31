import React, {useContext} from 'react';
import {Context} from '../Context.js';
import { useLocation } from 'react-router-dom';
import useRedirectTo from '../functions/useRedirectTo.js';
import useRedirectToWall from '../functions/useRedirectToWall.js';
import useRestartDefault from '../functions/useRestartDefault.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function CancelBtn () {
  const {colors, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const redirectTo = useRedirectTo();
  const redirectToWall = useRedirectToWall();
  const restartDefault = useRestartDefault();
  const location = useLocation();
  let hideCancelBtn = true;

  if (!(['/box/app'].includes(location.pathname))) {  
     hideCancelBtn = false;
  };

  function handleCancel () {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    if (['/box/options', '/box/editConfig', '/box/editSharing'].includes(location.pathname)) restartDefault();
    setEmailToUpdate('');
    shareChosen.current = '';
    if (/\/wall/.test(location.pathname)) {
      redirectToWall('/box/app');
    } else {
      redirectTo('/box/app');
    };
  };
  
  if (hideCancelBtn) {
    return (
      <div/>
    );
  } else {
    return (
      <FontAwesomeIcon
        className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
        onClick={handleCancel}
        icon='times' />
    );
  };
};

export default CancelBtn;