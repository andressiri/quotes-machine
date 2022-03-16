import React, { useContext, useState } from "react";
import { Context } from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import useLogout from '../../functions/useLogout.js';
import validateEmail from "../../functions/validateEmail.js";

function ForgotPassword() {
  const { colors, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [verified, setVerified] = refs.ver;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [codeValue, setCodeValue] = useState("");
  const [emailValue, setEmailValue] = useState('');
  const logout = useLogout();
  const redirectTo = useRedirectTo();

  async function handlePostCode(event) {
    event.preventDefault();
    const auxArray = [];
    if (codeValue !== '') {
      const response = await fetch("/users/verifyEmail", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"},
        body: JSON.stringify({
          code: codeValue,
          email: emailValue  
          })
      });
      let json = await response.json();
      if (json.message === 'Code is correct') {
        setVerified(true);
        redirectTo('/changePassword'); 
      } else {      
        auxArray.push(json.message);
      };
    } else {
      auxArray.push('Please enter the code sent');
    };

    setMessagesArray(auxArray);
  };

  async function handleSendEmail(event) {
    event.preventDefault();
    if (emailValue === '') return setMessagesArray(['Please enter your email']);
    if (!validateEmail(emailValue)) return setMessagesArray(['Please enter a valid email']);
    const auxArray = [];    
    const response = await fetch('/users/sendChangePassword', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"},
      body: JSON.stringify({
        email: emailValue
      }),
    });
    let json = await response.json();
    auxArray.push(json.message);
    if (json.message === 'Email sent') setEmailToUpdate(emailValue);
    setMessagesArray(auxArray);
  };

  function handleGoToLogin() {
    logout();
  };

  return (
    <div>
      <p className={`shareIt`} >Get the code from your email in order to verify your id</p>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <form id='sendEmail'>
        <input
        type="email"
        placeholder="Email..."
        className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
        onChange={(event) => setEmailValue(event.target.value)} />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handleSendEmail}
        >Send Email
        </button>
      </form>
      <form id="codeForm">
        <input
          type="text"
          placeholder="Enter code here..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onChange={(event) => setCodeValue(event.target.value)}
        />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handlePostCode}
        >Check Code
        </button>
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>
        Go to login
      </h2>
    </div>
  );
}

export default ForgotPassword;