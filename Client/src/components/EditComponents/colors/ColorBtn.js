import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function ColorBtn ({parentToChild}) {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {config, index, wall, numOfColor, textOrBG, opposite} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  let btnState = '';

  // handle btn lock to not set text and background the same - check for white and yellow too
  if (config[opposite] === numOfColor ||
    numOfColor === 2 && config[opposite] === 8 ||
    numOfColor === 8 && config[opposite] === 2) {
    btnState = 'buttonDisabled';
  };

  // enable btn and set "selected" border
  if (config[textOrBG] === numOfColor) {
    btnState = `buttonEnabled text-color${config[opposite]}`;
  };

  const handleColorBtn = () => {
    if (btnState === 'buttonDisabled') return;
    if (config._id === 'This was called by QuoteBox') {
      if (textOrBG === 'colorNum') {
        setColorNumber(numOfColor);
      } else {
        setImgBGColor(numOfColor);
      };
    } else {
      updateWallQuoteState(index, numOfColor, textOrBG, wall);
    };
  };

  return (
    <button
      className={`editBtn BG-color${numOfColor} ${btnState}`}
      onClick={handleColorBtn}
    ></button>
  );
};

export default ColorBtn;