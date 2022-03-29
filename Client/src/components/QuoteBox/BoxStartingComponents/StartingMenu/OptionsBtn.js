import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/useStopAuto.js'; 
import useRedirectTo from '../../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function OptionsBtn({parentToChild}) {
  const {colors, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();

  async function handleOptionsBtn () {
    stopAuto();
    setConfigBackup(parentToChild.config);
    redirectTo('/box/options'); 
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleOptionsBtn}
      icon='cog' />
  );
};

export default OptionsBtn;