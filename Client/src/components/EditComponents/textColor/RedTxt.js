import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function RedTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const redNum = 0;
  let redTxtState = '';
  
  if (config.imgBG === redNum) {
    redTxtState = 'buttonDisabled';
  };
  if (config.colorNum === redNum) {
    redTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleRedTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(redNum);
    } else {
      updateWallQuoteState(index, redNum, 'colorNum', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${redNum} ${redTxtState}`}
      onClick={handleRedTxt}
    ></button>
  );
};

export default RedTxt;