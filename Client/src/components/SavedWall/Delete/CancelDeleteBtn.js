import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function CancelDeleteBtn ({parentToChild}) {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const {config, index} = parentToChild;
  const redirectTo = useRedirectTo();

  async function handleCancelDeleteBtn() {    
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