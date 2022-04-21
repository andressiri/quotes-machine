import React, {useContext, useState} from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const {config} = parentToChild;
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  
  const handleSharingEditOkBtn = async () => {
    setIsLoading(true);
    const msg = await shareImg(quoteRef, config);
    setMessage(`Quote image has been shared on ${shareChosen.current}`);
    if (msg === 'There was an error getting the image, try again') setMessage(msg);
    shareChosen.current = '';
    if (restartDefaultObj) {
      restartDefault();
    } else {
      setConfigBackup(config);
    };
    setIsLoading(false);
    redirectTo('/box/message');
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSharingEditOkBtn}
    >{isLoading === true ? 'Sharing...' : 'Share'}</button>
  );
};

export default SharingEditOkBtn;