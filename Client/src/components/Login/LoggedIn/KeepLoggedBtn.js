import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function KeepLoggedBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const redirectTo = useRedirectTo();

  async function handleKeepLoggedBtn() {    
    redirectTo('/box/app');
  };

  return (
    <button className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleKeepLoggedBtn} id="new-quote">No, thanks</button>
  );
};

export default KeepLoggedBtn;