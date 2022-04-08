import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function WhiteBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const whiteNum = 8;
  let whiteBGState = '';

  if (config.colorNum === whiteNum || config.colorNum === 2) { // 2 is for yellow
    whiteBGState = 'buttonDisabled';
  };
  if (config.imgBG === whiteNum) {
    whiteBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleWhiteBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(whiteNum);
    } else {
      updateWallQuoteState(index, whiteNum, 'imgBG', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${whiteNum} ${whiteBGState}`}
      onClick={handleWhiteBG}
    ></button>
  );
};

export default WhiteBG;