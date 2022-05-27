import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useCreateOptionsObj from '../../../functions/useCreateOptionsObj.js';
import useCheckLoginCondition from '../../../functions/userFunctions/useCheckLoginCondition.js';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';

function SaveOptionsBtn ({parentToChild}) {
  const {colors, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();
  const createOptionsObj = useCreateOptionsObj();
  const checkLoginCondition = useCheckLoginCondition();
  const restartDefault = useRestartDefault();
  
  const handleSaveOptionsBtn = async () => {
    if (isLoading) return;
    if (checkLoginCondition()) {
      setIsLoading(true);
      const userOpt = createOptionsObj(parentToChild.config);
      const response = await fetch('/api/users/options/save', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',},
        body: JSON.stringify({userOptions: userOpt}),
      });
      const json = await response.json();
      if (response.status === 200) {
        setConfigBackup(parentToChild.config);
      } else {
        restartDefault();
      }
      setMessage(json.message);
      setIsLoading(false);
      redirectTo('/box/message');
    }
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSaveOptionsBtn}
    >{isLoading === true ? 'Saving...' : 'Save'}</button>
  );
};

export default SaveOptionsBtn;