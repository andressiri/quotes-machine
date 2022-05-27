import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function CopyToClipboardBtn({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleCopyToClipboardBtn = () => {
    shareChosen.current ='Clipboard';
    let redirectPath = '/box/sharing/choices';
    if (config._id !== 'This was called by QuoteBox') redirectPath = `/${wall}/${config._id}/sharing/choice`;
    redirectTo(redirectPath);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleCopyToClipboardBtn}
      icon='paperclip' />
  );
};

export default CopyToClipboardBtn;