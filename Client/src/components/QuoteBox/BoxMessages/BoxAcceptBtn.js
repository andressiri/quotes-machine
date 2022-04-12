import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useGetSavedQuotes from '../../../functions/userFunctions/useGetSavedQuotes.js';

function BoxAcceptBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  const getSavedQuotes = useGetSavedQuotes();
  
  const handleBoxAcceptBtn = async () => {
    if (message === 'Login success') {
      restartDefault();
      getSavedQuotes();
    };
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/app');
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleBoxAcceptBtn}
      icon='check' />
  );
};

export default BoxAcceptBtn;