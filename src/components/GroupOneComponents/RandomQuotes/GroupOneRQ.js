import React, {useContext} from 'react';
import {Context} from './../../../Context.js';
import AutoBtn from './AutoBtn.js';
import SetAutoTimeBtn from './SetAutoTimeBtn.js';
import NewQuoteBtn from './NewQuoteBtn.js';

function GroupOneRQ () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [groupRef, setGroupRef] = groups.gRef;

  if (groupRef !== 'groupOne') {
    return (
      <div className={`groupOneRQ BG-color${imgBGColor} text-color${colorNumber}`} />
    );
  } else {
    return (
      <div className={`groupOneRQ BG-color${imgBGColor} text-color${colorNumber}`}>
        <AutoBtn/>
        <SetAutoTimeBtn />
        <NewQuoteBtn />
      </div>
    );
  }
};

export default GroupOneRQ;