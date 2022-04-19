import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import {Routes, Route } from 'react-router-dom';
import CancelBtn from '../../../CancelBtn.js';
import AutoBtn from './AutoBtn.js';
import SetAutoTimeBtn from './SetAutoTimeBtn.js';
import NewQuoteBtn from './NewQuoteBtn.js';

function StartingSetRQ () {
  const {colors, fade} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fadeMenu, setFadeMenu] = fade.fadM;

  return (
    <div className={`StartingSetRQ BG-color${imgBGColor} text-color${colorNumber} fadeRoute${fadeMenu}`}>
      <Routes>
        <Route path='/app'  element={
          <div>
            <AutoBtn/>
            <SetAutoTimeBtn />
            <NewQuoteBtn />
          </div>
        } />
      </Routes>
      <CancelBtn />
    </div>
  );
};

export default StartingSetRQ;