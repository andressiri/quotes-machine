import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useLogout from '../../../functions/useLogout.js';

function LogoutBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const logout = useLogout();

  async function handleLogoutBtn() {    
    logout();
  };

  return (
    <button className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleLogoutBtn} id="new-quote">Log Out</button>
  );
};

export default LogoutBtn;