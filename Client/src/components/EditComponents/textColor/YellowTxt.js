import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function YellowTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const yellowNum = 2;
  let yellowTxtState = '';
  
  if (config.imgBG === yellowNum || config.imgBG === 8) { // 8 is for white
    yellowTxtState = 'buttonDisabled';
  };
  if (config.colorNum === yellowNum) {
    yellowTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleYellowTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(yellowNum);
    } else {
      updateWallQuoteState(index, yellowNum, 'colorNum', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${yellowNum} ${yellowTxtState}`}
      onClick={handleYellowTxt}
    ></button>
  );
};

export default YellowTxt;