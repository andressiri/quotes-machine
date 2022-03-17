import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';

function CheckCodeBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [verified, setVerified] = refs.ver;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [codeValue, setCodeValue] = forms.code;
  const redirectTo = useRedirectTo();

  async function handlePostCode(event) {
    event.preventDefault();
    if (emailToUpdate === '') return setMessagesArray(['No code was requested yet']);
    if (codeValue === '') return setMessagesArray(['Please enter the code sent']);
    const auxArray = [];
    const response = await fetch("/users/verifyEmail", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"},
      body: JSON.stringify({
        code: codeValue,
        email: emailToUpdate  
        })
    });
    let json = await response.json();
    if (json.message === 'Code is correct') {
      if (loggedIn) {
        setVerified(true);
        redirectTo('/loggedIn');
      } else {
        redirectTo('/changePassword'); 
      };
    } else {      
      auxArray.push(json.message);
    };
    setMessagesArray(auxArray);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handlePostCode}
    >Check Code
    </button>
  );
};

export default CheckCodeBtn;