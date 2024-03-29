import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js'; 
import useCheckVerified from '../../../../functions/userFunctions/useCheckVerified.js';
import useRedirectTo from '../../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function LoginBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [loggedIn, setLoggedIn] = refs.logged;
  const stopAuto = useStopAuto();
  const checkVerified = useCheckVerified();
  const redirectTo = useRedirectTo();

  const handleLoginBtn = () => {
    stopAuto();
    if (loggedIn) {
      checkVerified();
    } else {
      redirectTo('/box/login');
    };
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleLoginBtn}
      icon='user' />
  );
};

export default LoginBtn;