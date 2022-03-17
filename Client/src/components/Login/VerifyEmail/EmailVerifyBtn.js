import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function EmailVerifyBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;  
  
  async function handleSendEmailVerify(event) {
    event.preventDefault();
    const auxArray = [];
    const response  = await fetch('/users/sendVerifyEmail'); 
    let json = await response.json();
    setEmailToUpdate('To check if code was requested');
    auxArray.push(json.message);
    setMessagesArray(auxArray);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSendEmailVerify}
    >Send Email
    </button>
  );
};

export default EmailVerifyBtn;