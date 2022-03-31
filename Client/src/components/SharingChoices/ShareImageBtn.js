import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareImg from '../../functions/sharingFunctions/useShareImg.js';

function ShareImageBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const quoteRef = refs.refImg;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const {config} = parentToChild;
  const shareImg = useShareImg(); 
  const redirectTo = useRedirectTo(); 
  
  async function handleShareImageBtn () {
    let redirectPath = '/box/message';
    let msg = '';
    if (config._id !== 'This was called by QuoteBox') {
      redirectPath = `/wall/${config._id}/message`;
      msg = await shareImg(window[`ref${config._id}`], config);
    } else {      
      msg = await shareImg(quoteRef, config);
    }; 
    setMessage(`Quote image has been shared on ${shareChosen.current}`);
    if (msg === 'There was an error getting the image, try again') setMessage(msg);
    shareChosen.current = '';
    redirectTo(redirectPath);
  };  

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleShareImageBtn}
      icon="image" />
  );
};

export default ShareImageBtn;