import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function GreenTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const greenNum = 3;
  let greenTxtState = '';
  
  if (config.imgBG === greenNum) {
    greenTxtState = 'buttonDisabled';
  };
  if (config.colorNum === greenNum) {
    greenTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleGreenTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(greenNum);
    } else {
      updateWallQuoteState(index, greenNum, 'colorNum', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${greenNum} ${greenTxtState}`}
      onClick={handleGreenTxt}
    ></button>
  );
};

export default GreenTxt;