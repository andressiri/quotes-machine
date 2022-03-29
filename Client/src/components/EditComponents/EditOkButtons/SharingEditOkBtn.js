import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useShareImg from '../../../functions/useShareImg.js';
import useRestartDefault from '../../../functions/useRestartDefault.js';

function SharingEditOkBtn ({parentToChild}) {
  const {colors, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const [restartDefault, setRestartDefault] = edit.auto;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();
  const restartToDefault = useRestartDefault();  
  
  async function handleSharingEditOkBtn () {
    await shareImg();
    setMessage('Quote has been shared');
    if (shareChosen === 'Clipboard') setMessage('Quote has been copied to clipboard');
    setShareChosen(''); 
    if (restartDefault) {
      restartToDefault();
    } else {
      setConfigBackup(parentToChild.config);
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