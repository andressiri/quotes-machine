import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function IndigoTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const indigoNum = 5;
  let indigoTxtState = '';
  
  if (config.imgBG === indigoNum) {
    indigoTxtState = 'buttonDisabled';
  };
  if (config.colorNum === indigoNum) {
    indigoTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleIndigoTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(indigoNum);
    } else {
      updateWallQuoteState(index, indigoNum, 'colorNum', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${indigoNum} ${indigoTxtState}`}
      onClick={handleIndigoTxt}
    ></button>
  );
};

export default IndigoTxt;