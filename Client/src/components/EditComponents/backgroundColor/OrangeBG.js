import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function OrangeBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const orangeNum = 1;
  let orangeBGState = '';

  if (config.colorNum === orangeNum) {
    orangeBGState = 'buttonDisabled';
  };
  if (config.imgBG === orangeNum) {
    orangeBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleOrangeBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(orangeNum);
    } else {
      updateWallQuoteState(index, orangeNum, 'imgBG', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${orangeNum} ${orangeBGState}`}
      onClick={handleOrangeBG}
    ></button>
  );
};

export default OrangeBG;