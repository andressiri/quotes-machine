import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import StartingSetRQ from './BoxStartingComponents/RandomQuotes/StartingSetRQ.js';
import Quote from './Quote.js';
import RouteContainer from './RouteContainer.js'
import CancelBtn from '../CancelBtn.js';

function QuoteBox() {
  const {colors, fade, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fadeWall, setFadeWall] = fade.fadW;
  const [forceUpdate, setForceUpdate] = force.update;
  const [updateForced, setUpdateForced] = force.forced;
  
  useEffect(() => {
    setUpdateForced(updateForced => updateForced + 1);
  }, [forceUpdate]);

  return (
    <div id="quote-box" className={`quoteBox BG-color${imgBGColor} text-color${colorNumber}`}>
      <StartingSetRQ />
      <Quote />
      <RouteContainer />
      <CancelBtn />
    </div>
  );
};

export default QuoteBox;