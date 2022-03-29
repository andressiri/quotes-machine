import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import useRestartDefault from '../../functions/useRestartDefault.js';
import useCancelEdition from '../../functions/useCancelEdition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function EditCancelBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  const cancelEdition = useCancelEdition();
  const {config, index} = parentToChild; 
  
  async function handleEditCancelBtn () {
    setMessage('Edition has been canceled');
    if (config._id === 'This was called by QuoteBox') {
      restartDefault();
      setShareChosen('');
      redirectTo('/box/message');
    } else {
      cancelEdition(index);
      redirectTo(`/wall/${config._id}/message`);      
    }
  }; 

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleEditCancelBtn}
      icon='ban' />
  );
};

export default EditCancelBtn;