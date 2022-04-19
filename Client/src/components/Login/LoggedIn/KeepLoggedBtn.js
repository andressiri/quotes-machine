import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function KeepLoggedBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const redirectTo = useRedirectTo();

  const handleKeepLoggedBtn = () => {
    redirectTo('/box/app');
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleKeepLoggedBtn}
    >No, thanks</button>
  );
};

export default KeepLoggedBtn;