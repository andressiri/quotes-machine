import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function WhiteTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const whiteNum = 8;
  let whiteTxtState = '';
  
  if (config.imgBG === whiteNum || config.imgBG === 2) { // 2 is for yellow
    whiteTxtState = 'buttonDisabled';
  };
  if (config.colorNum === whiteNum) {
    whiteTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleWhiteTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(whiteNum);
    } else {
      updateWallQuoteState(index, whiteNum, 'colorNum', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${whiteNum} ${whiteTxtState}`}
      onClick={handleWhiteTxt}
    ></button>
  );
};

export default WhiteTxt;