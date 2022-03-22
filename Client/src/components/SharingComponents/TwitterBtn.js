import React, {useContext} from 'react';
import {Context} from './../../Context.js';
import useRedirectTo from './../../functions/useRedirectTo.js';
import useStopAuto from './../../functions/useStopAuto.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function TwitterBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();

  function handleTwitter () {
    stopAuto();
    setShareChosen('Twitter');
    redirectTo('/box/txtOrImg');
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleTwitter} icon={['fab', 'twitter']} />
  );
};

export default TwitterBtn;
