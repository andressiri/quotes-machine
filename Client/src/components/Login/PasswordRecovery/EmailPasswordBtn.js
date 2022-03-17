import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import validateEmail from '../../../functions/validateEmail.js';

function EmailPasswordBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [emailValue, setEmailValue] = forms.email;

  async function handleSendEmailPassword(event) {
    event.preventDefault();
    if (emailValue === '') return setMessagesArray(['Please enter your email']);
    if (!validateEmail(emailValue)) return setMessagesArray(['Please enter a valid email']);
    const auxArray = [];    
    const response = await fetch('/users/sendChangePassword', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: emailValue
      }),
    });
    let json = await response.json();
    auxArray.push(json.message);
    if (json.message === 'Email sent') setEmailToUpdate(emailValue);
    setMessagesArray(auxArray);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSendEmailPassword}
    >Send Email
    </button>
  );
};

export default EmailPasswordBtn;