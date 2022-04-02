import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function OrangeTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const orangeNum = 1;
  let orangeTxtState = '';
  
  if (config.imgBG === orangeNum) {
    orangeTxtState = 'buttonDisabled';
  };
  if (config.colorNum === orangeNum) {
    orangeTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleOrangeTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(orangeNum);
    } else {
      updateWallQuoteState(index, orangeNum, 'colorNum');
    };
  };

  return (
    <button
      className={`editBtn BG-color${orangeNum} ${orangeTxtState}`}
      onClick={handleOrangeTxt}
    ></button>
  );
};

export default OrangeTxt;