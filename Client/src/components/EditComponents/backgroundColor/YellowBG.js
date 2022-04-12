import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function YellowBG ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const yellowNum = 2;
  let yellowBGState = '';
  
  if (config.colorNum === yellowNum || config.colorNum === 8) { // 8 is for white
    yellowBGState = 'buttonDisabled';
  };
  if (config.imgBG === yellowNum) {
    yellowBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleYellowBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(yellowNum);
    } else {
      updateWallQuoteState(index, yellowNum, 'imgBG', wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${yellowNum} ${yellowBGState}`}
      onClick={handleYellowBG}
    ></button>
  );
};

export default YellowBG;