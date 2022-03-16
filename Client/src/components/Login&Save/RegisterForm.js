import React, { useContext, useState } from 'react';
import { Context } from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import validateEmail from '../../functions/validateEmail.js';

function RegisterForm() {
  const { colors, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [password2Value, setPassword2Value] = useState('');
  const redirectTo = useRedirectTo();

  async function handleSubmitRegister(event) {
    event.preventDefault();
    const auxArray = [];    
    //Check required fields
    if (nameValue === '' || emailValue === '' || passwordValue === '' || password2Value === '') {
      auxArray.push('Please fill in all fields');
    };
    //Check valid email
    if (emailValue !== '' && !validateEmail(emailValue)) {
      auxArray.push('Please enter a valid email');    
    };
    //Check passwords match
    if (passwordValue !== "" && passwordValue !== password2Value) {
      auxArray.push('Passwords do not match');
    };
    //Check password length
    if (passwordValue !== '' && passwordValue.length < 6) {
      auxArray.push('Password should be at least 6 characters');
    };
    // POST the form if it meets requirements
    if (auxArray.length === 0) {
      const response = await fetch("/users/register", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',},
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
        }),
      });
      let json = await response.json();
      // Check if mail is available
      auxArray.push(json.message);
      if (json.message === `${nameValue} was registered successfully`) redirectTo('/login');
    };
    setMessagesArray(auxArray);
  };

  function handleGoToLogin() {
    setMessagesArray([]);
    redirectTo('/login');
  };

  return (
    <div>
      <p className={`shareIt`} >Fill all fields to create an account</p>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <form id='registerForm'>
        <input
          type='text'
          placeholder='Name...'
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setNameValue(event.target.value)}
        />
        <input
          type='email'
          placeholder='Email...'
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <input
          type='password'
          placeholder='Password...'
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <input
          type='password'
          placeholder='Repeat Password...'
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setPassword2Value(event.target.value)}
        />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handleSubmitRegister}
        >Register
        </button>
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>
        Go to login
      </h2>
    </div>
  );
};

export default RegisterForm;
