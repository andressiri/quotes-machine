import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import validateEmail from '../../functions/validateEmail.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function EditAndShareImgBtn ({parentToChild}) {
  const {colors, refs, edit, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const [emailValue, setEmailValue] = forms.email;
  const redirectTo = useRedirectTo();
  
  const handleEditAndShareImgBtn = () => {
    if (shareChosen.current === 'Email') {
      if (!validateEmail(emailValue)) return setMessage('Please enter a valid email');
      emailReference.current = emailValue;
    };
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    setConfigBackup(parentToChild.config);
    redirectTo('/box/editSharing');
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleEditAndShareImgBtn}
      icon='pen' />
  );
};

export default EditAndShareImgBtn;