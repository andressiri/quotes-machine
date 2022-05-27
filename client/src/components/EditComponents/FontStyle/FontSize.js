import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function FontSize ({parentToChild}) {
  const {edit} = useContext(Context);
  const [fSize, setFSize] = edit.fontS;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();

  const handleFontSize = () => {
    if (config._id === 'This was called by QuoteBox') {
      if (config.fontS === 40) return setFSize(30);
      setFSize(n => n + 1);
    } else {
      let auxValue = config.fontS + 1;
      if (config.fontS === 40) auxValue = 30;
      updateWallQuoteState(index, auxValue, 'fontS', wall);
    }
  };

  return (
    <div
      className={`editBtn fFam BG-color${config.imgBG}
      text-color${config.colorNum}`}
      onClick={handleFontSize}
    >{config.fontS}</div>
  );
};

export default FontSize;