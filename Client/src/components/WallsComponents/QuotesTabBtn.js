import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function QuotesTabBtn ({parentToChild}) {
  const {colors, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [forceUpdate, setForceUpdate] = force.update;
  const {selectedTab, firstTab, secondTab, btnText} = parentToChild;

  const handleQuotesTabBtn = () => {
    firstTab.current = false;
    secondTab.current = false;
    if (selectedTab === 'first') firstTab.current = true;
    if (selectedTab === 'second') secondTab.current = true;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleQuotesTabBtn}
    >{btnText}</button>
  );
};

export default QuotesTabBtn;