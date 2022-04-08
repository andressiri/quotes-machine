import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function VioletBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const violetNum = 6;
  let violetBGState = '';

  if (config.colorNum === violetNum) {
    violetBGState = 'buttonDisabled';
  };
  if (config.imgBG === violetNum) {
    violetBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleVioletBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(violetNum);
    } else {
      updateWallQuoteState(index, violetNum, 'imgBG', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${violetNum} ${violetBGState}`}
      onClick={handleVioletBG}
    ></button>
  );
};

export default VioletBG;