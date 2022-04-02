import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function BlackBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const blackNum = 7;
  let blackBGState = '';

  if (config.colorNum === blackNum) {
    blackBGState = 'buttonDisabled';
  };
  if (config.imgBG === blackNum) {
    blackBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleBlackBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(blackNum);
    } else {
      updateWallQuoteState(index, blackNum, 'imgBG');
    };
  };

  return (
    <button
      className={`editBtn BG-color${blackNum} ${blackBGState}`}
      onClick={handleBlackBG}
    ></button>
  );
};

export default BlackBG;