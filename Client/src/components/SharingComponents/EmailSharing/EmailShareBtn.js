import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useCheckLoginCondition from '../../../functions/userFunctions/useCheckLoginCondition.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function EmailShareBtn({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const {config} = parentToChild;
  const redirectTo = useRedirectTo();
  const checkLoginCondition = useCheckLoginCondition();

  const handleEmailShareBtn = () => {
    if (checkLoginCondition()) {
      shareChosen.current = 'Email';
      let redirectPath = '/box/sharingChoices';
      if (config._id !== 'This was called by QuoteBox') redirectPath = `/wall/${config._id}/wallShareChoice`;
      redirectTo(redirectPath);
    };
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleEmailShareBtn}
      icon='envelope' />
  );
};

export default EmailShareBtn;