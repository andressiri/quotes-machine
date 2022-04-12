import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function GreenBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const greenNum = 3;
  let greenBGState = '';

  if (config.colorNum === greenNum) {
    greenBGState = 'buttonDisabled';
  };
  if (config.imgBG === greenNum) {
    greenBGState = `buttonEnabled text-color${config.colorNum}`;
  };
  const handleGreenBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(greenNum);
    } else {
      updateWallQuoteState(index, greenNum, 'imgBG', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${greenNum} ${greenBGState}`}
      onClick={handleGreenBG}
    ></button>
  );
};

export default GreenBG;