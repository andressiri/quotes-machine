import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function CancelDeleteBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const {config} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleCancelDeleteBtn = () => {
    setMessage('Quote elimination canceled');
    redirectTo(`/wall/${config._id}/message`);
  };

  return (
    <button
      className={`NQbtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleCancelDeleteBtn}
    >No, thanks</button>
  );
};

export default CancelDeleteBtn;