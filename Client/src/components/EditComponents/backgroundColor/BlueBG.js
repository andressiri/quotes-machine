import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function BlueBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const blueNum = 4;
  let blueBGState= '';

  if (config.colorNum === blueNum) {
    blueBGState = 'buttonDisabled';
  };
  if (config.imgBG === blueNum) {
    blueBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleBlueBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(blueNum);
    } else {
      updateWallQuoteState(index, blueNum, 'imgBG', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${blueNum} ${blueBGState}`}
      onClick={handleBlueBG}
    ></button>
  );
};

export default BlueBG;