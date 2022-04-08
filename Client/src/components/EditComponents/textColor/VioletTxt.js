import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function VioletTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const violetNum = 6;
  let violetTxtState = '';
  
  if (config.imgBG === violetNum) {
    violetTxtState = 'buttonDisabled';
  };
  if (config.colorNum === violetNum) {
    violetTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleVioletTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(violetNum);
    } else {
      updateWallQuoteState(index, violetNum, 'colorNum', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${violetNum} ${violetTxtState}`}
      onClick={handleVioletTxt}
    ></button>
  );
};

export default VioletTxt;