import React, { useContext, useState } from "react";
import { Context } from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";

function ChangePassword() {
  const { colors, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [passwordValue, setPasswordValue] = useState('');
  const [password2Value, setPassword2Value] = useState('');
  const redirectTo = useRedirectTo();

  async function handleSubmitNewPassword(event) {
    event.preventDefault();
    const auxArray = [];    
    //Check required fields
    if (passwordValue === '' || password2Value === '') {
      auxArray.push('Please fill in all fields');
    };
    //Check passwords match
    if (passwordValue !== '' && passwordValue !== password2Value) {
      auxArray.push('Passwords do not match');
    };
    //Check password length
    if (passwordValue !== '' && passwordValue.length < 6) {
      auxArray.push('Password should be at least 6 characters');
    };
    // POST the form if it meets requirements
    if (auxArray.length === 0) {
      const response = await fetch('/users/changePassword', {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"},
        body: JSON.stringify({
          email: emailToUpdate,
          password: passwordValue
        }),
      });
      let json = await response.json();
      auxArray.push(json.message);
      setEmailToUpdate('');
      redirectTo('/login');
    };
    setMessagesArray(auxArray);
  };

  function handleGoToLogin() {
    setEmailToUpdate('');
    setMessagesArray([]);
    redirectTo('/login');
  };

  return (
    <div>
      <p className={`shareIt`} >Create your new password</p>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <form id="registerForm">
        <input
          type="password"
          placeholder="Password..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setPasswordValue(event.target.value)} />
        <input
          type="password"
          placeholder="Repeat Password..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setPassword2Value(event.target.value)} />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handleSubmitNewPassword}
        > Confirm
        </button>
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>
        Go to login
      </h2>
    </div>
  );
};

export default ChangePassword;