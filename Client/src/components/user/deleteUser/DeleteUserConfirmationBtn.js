import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function DeleteUserConfirmationBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const auxRef = refs.aux;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();
  
  const handleDeleteUserConfirmationBtn = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch('/api/users/user/delete', {method: 'DELETE'});
    const json = await response.json();
    if (response.status === 200) {
      const logout = fetch('/api/users/logout', {method: 'DELETE'});
      setLoggedIn(false);
    };
    emailReference.current = '';
    auxRef.current = '';
    setMessage(json.message);
    setIsLoading(false);
    redirectTo('/box/message');
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleDeleteUserConfirmationBtn}
    >{isLoading === true ? 'Deleting...' : 'Yes I am!'}</button>
  );
};

export default DeleteUserConfirmationBtn;