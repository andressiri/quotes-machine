import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useShareImg from '../../../functions/sharingFunctions/useShareImg.js';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';

function SharingEditOkBtn ({parentToChild}) {
  const {colors, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const quoteRef = refs.refImg;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const [restartDefaultObj, setRestartDefaultObj] = edit.auto;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const {config} = parentToChild;
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();  
  
  async function handleSharingEditOkBtn () {
    const msg = await shareImg(quoteRef, config);
    setMessage(`Quote image has been shared on ${shareChosen.current}`);
    if (msg === 'There was an error getting the image, try again') setMessage(msg);
    shareChosen.current = '';
    if (restartDefaultObj) {
      restartDefault();
    } else {
      setConfigBackup(config);
    };
    redirectTo('/box/message');
  }; 

  return (
    <button
    className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
    onClick={handleSharingEditOkBtn}
    >Share</button>
  );
};

export default SharingEditOkBtn;