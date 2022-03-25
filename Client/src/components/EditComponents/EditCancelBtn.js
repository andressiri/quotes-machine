import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import useRestartDefault from '../../functions/useRestartDefault.js';
import useCancelEdition from '../../functions/useCancelEdition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function EditCancelBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen; 
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  const cancelEdition = useCancelEdition(); 
  
  async function handleEditCancelBtn () {
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      restartDefault();
      setShareChosen('');
      redirectTo('/box/app');
    } else {
      cancelEdition(parentToChild.index);
      redirectTo('/wall');      
    }
  }; 

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${parentToChild.config.colorNum} text-color${parentToChild.config.imgBG}`} onClick={handleEditCancelBtn} icon='ban' />
  );
};

export default EditCancelBtn;