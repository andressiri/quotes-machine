import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useSavedCancelEdition from '../../../functions/DOMFunctions/useSavedCancelEdition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SavedEditCancelBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const savedCancelEdition = useSavedCancelEdition();
  const {config, index, wall} = parentToChild;
  
  const handleSavedEditCancelBtn = () => {
    setMessage('Edition has been canceled');
    savedCancelEdition(index);
    redirectTo(`/${wall}/${config._id}/wallMessage`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSavedEditCancelBtn}
      icon='ban' />
  );
};

export default SavedEditCancelBtn;