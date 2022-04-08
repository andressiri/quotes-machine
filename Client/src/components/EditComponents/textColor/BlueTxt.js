import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function BlueTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const blueNum = 4;
  let blueTxtState = '';
  
  if (config.imgBG === blueNum) {
    blueTxtState = 'buttonDisabled';
  };
  if (config.colorNum === blueNum) {
    blueTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleBlueTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(blueNum);
    } else {
      updateWallQuoteState(index, blueNum, 'colorNum', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${blueNum} ${blueTxtState}`}
      onClick={handleBlueTxt}
    ></button>
  );
};

export default BlueTxt;