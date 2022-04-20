import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function QuotesTabBtn ({parentToChild}) {
  const {colors, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [forceUpdate, setForceUpdate] = force.update;
  const {selectedTab, firstTab, secondTab, btnText} = parentToChild;
  
  let tabPositionAndSelection = '';
  if (selectedTab === 'first') {
    tabPositionAndSelection = 'notAllTab';
    if (firstTab.current === true) tabPositionAndSelection = 'selectedTab notAllTab';
  };
  if (selectedTab === 'second') {
    tabPositionAndSelection = 'notAllTab lastTab';
    if (secondTab.current === true) tabPositionAndSelection = 'selectedTab notAllTab lastTab';
  };
  if (selectedTab === 'all') {
    tabPositionAndSelection = 'allTab';
    if (firstTab.current === false && secondTab.current === false) tabPositionAndSelection = 'selectedTab allTab';
    if (secondTab.current === true) tabPositionAndSelection = 'allTab allTabSecondSelected';
  };

  const handleQuotesTabBtn = () => {
    firstTab.current = false;
    secondTab.current = false;
    if (selectedTab === 'first') firstTab.current = true;
    if (selectedTab === 'second') secondTab.current = true;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };

  return (
    <div
      className={`wallTab ${tabPositionAndSelection} BG-color${imgBGColor} text-color${colorNumber}`}
      onClick={handleQuotesTabBtn}
    >{btnText}</div>
  );
};

export default QuotesTabBtn;