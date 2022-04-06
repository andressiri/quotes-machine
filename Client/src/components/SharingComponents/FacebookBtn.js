import React, {useContext} from 'react';
import {Context} from './../../Context.js';
import useRedirectTo from './../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function FacebookBtn({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleFacebookBtn = () => {
    shareChosen.current = 'Facebook';
    let redirectPath = '/box/sharingChoices';
    if (config._id !== 'This was called by QuoteBox') redirectPath = `/${wall}/${config._id}/wallShareChoice`;
    redirectTo(redirectPath);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleFacebookBtn}
      icon={['fab', 'facebook-f']} />
  );
};

export default FacebookBtn;