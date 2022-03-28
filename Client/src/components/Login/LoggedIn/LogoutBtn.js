import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useLogout from '../../../functions/useLogout.js';

function LogoutBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const logout = useLogout();

  async function handleLogoutBtn() {    
    setTimeout(() => {  // Timeout to handle transition
      setMessage('Logged out, log in again?');
    }, 250);
    logout();
  };

  return (
    <button className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleLogoutBtn} id="new-quote">Log Out</button>
  );
};

export default LogoutBtn;