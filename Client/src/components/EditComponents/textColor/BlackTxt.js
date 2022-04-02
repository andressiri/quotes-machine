import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function BlackTxt ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const blackNum = 7;
  let blackTxtState = '';

  if (config.imgBG === blackNum) {
    blackTxtState = 'buttonDisabled';
  };
  if (config.colorNum === blackNum) {
    blackTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleBlackTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(blackNum);
    } else {
      updateWallQuoteState(index, blackNum, 'colorNum');
    };
  };

  return (
    <button
      className={`editBtn BG-color${blackNum} ${blackTxtState}`}
      onClick={handleBlackTxt}
    ></button>
  );
};

export default BlackTxt;