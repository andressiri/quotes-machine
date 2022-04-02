import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function RedBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const redNum = 0;
  let redBGState = '';

  if (config.colorNum === redNum) {
    redBGState = 'buttonDisabled';
  };
  if (config.imgBG === redNum) {
    redBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleRedBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(redNum);
    } else {
      updateWallQuoteState(index, redNum, 'imgBG');
    };
  };

  return (
    <button
      className={`editBtn BG-color${redNum} ${redBGState}`}
      onClick={handleRedBG}
    ></button>
  );
};

export default RedBG;