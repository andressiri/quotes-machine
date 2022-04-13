import React, {useContext} from 'react';
import {Context} from '../Context.js';
import { useLocation } from 'react-router-dom';
import useRedirectTo from '../functions/useRedirectTo.js';
import useRedirectToWall from '../functions/useRedirectToWall.js';
import useRestartDefault from '../functions/DOMFunctions/useRestartDefault.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function CancelBtn () {
  const {colors, quote, fade, refs, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = fade.fadQ;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const auxRef = refs.aux;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  const redirectTo = useRedirectTo();
  const redirectToWall = useRedirectToWall();
  const restartDefault = useRestartDefault();
  const location = useLocation();
  let hideCancelBtn = true;

  if (!(['/box/app'].includes(location.pathname))) {
     hideCancelBtn = false;
  };

  const handleCancelBtn = () => {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    if (['/box/options', '/box/options/edit', '/box/sharing/edit'].includes(location.pathname)) restartDefault();
    if (location.pathname === '/box/custom-quote') {
      setFadeQuote('Out');
      setTimeout(() => {  // Timeout to handle transition
        setQuoteText(gallArray[gallChoose].text);
        setAuthor(gallArray[gallChoose].author);
        setFadeQuote('In');
      }, 250);
    };
    shareChosen.current = '';
    emailReference.current = '';
    auxRef.current = '';
    if (/wall/i.test(location.pathname)) {
      redirectToWall('/box/app');
    } else {
      redirectTo('/box/app');
    };
  };
  
  if (hideCancelBtn) {
    return (<div/>);
  } else {
    return (
      <FontAwesomeIcon
        className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
        onClick={handleCancelBtn}
        icon='times' />
    );
  };
};

export default CancelBtn;