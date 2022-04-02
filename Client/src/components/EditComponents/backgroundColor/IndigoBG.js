import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function IndigoBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const indigoNum = 5;
  let indigoBGState = '';
  
  if (config.colorNum === indigoNum) {
    indigoBGState = 'buttonDisabled';
  };
  if (config.imgBG === indigoNum) {
    indigoBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleIndigoBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(indigoNum);
    } else {
      updateWallQuoteState(index, indigoNum, 'imgBG');
    };
  };

  return (
    <button
      className={`editBtn BG-color${indigoNum} ${indigoBGState}`}
      onClick={handleIndigoBG}
    ></button>
  );
};

export default IndigoBG;