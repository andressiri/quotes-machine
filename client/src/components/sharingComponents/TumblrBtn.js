import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function TumblrBtn({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleTumblr = () => {
    shareChosen.current = 'Tumblr';
    let redirectPath = '/box/sharing/choices';
    if (config._id !== 'This was called by QuoteBox') redirectPath = `/${wall}/${config._id}/sharing/choice`;
    redirectTo(redirectPath);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleTumblr}
      icon={['fab', 'tumblr']} />
  );
};

export default TumblrBtn;