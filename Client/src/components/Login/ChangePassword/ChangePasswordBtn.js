import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function ChangePasswordBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailToUpdate, setEmailToUpdate] = refs.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [password2Value, setPassword2Value] = forms.pass2;
  const [isLoading, setIsLoading] = useState(false); 
  const redirectTo = useRedirectTo();

  async function handleSubmitNewPassword(event) {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    let auxBool = true; //State won't update for final check, so isLoading can't be used in the conditional. Without that conditional isLoading would be updated after redirect leading to the error: "Can't perform a React state update on an unmounted component"
    const msgArray = [];    
    //Check required fields
    if (passwordValue === '' || password2Value === '') {
      msgArray.push('Please fill in all fields');
    };
    //Check passwords match
    if (passwordValue !== '' && passwordValue !== password2Value) {
      msgArray.push('Passwords do not match');
    };
    //Check password length
    if (passwordValue !== '' && passwordValue.length < 6) {
      msgArray.push('Password should be at least 6 characters');
    };
    // POST the form if it meets requirements
    if (msgArray.length === 0) {
      const response = await fetch('/users/changePassword', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: emailToUpdate,
          password: passwordValue
        }),
      });
      let json = await response.json();
      msgArray.push(json.message);
      setEmailToUpdate('');
      setIsLoading(false);
      auxBool = false;
      redirectTo('/box/login');
    };
    setMessagesArray(msgArray);
    if (auxBool) setIsLoading(false);  // final check
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSubmitNewPassword}
    > Confirm
    </button>
  );
};

export default ChangePasswordBtn;