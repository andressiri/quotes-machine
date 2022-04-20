import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useReverseSavedQuotesArray from '../../functions/userFunctions/useReverseSavedQuotesArray.js';

function ReverseQuotesBtn() {
  const {colors, quote, fade, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const reverseSavedQuotesArray = useReverseSavedQuotesArray();

  const handleReverseQuotesBtn = () => {
    reverseSavedQuotesArray();
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn reverseBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleReverseQuotesBtn}
      icon='history' />
  );
};

export default ReverseQuotesBtn;