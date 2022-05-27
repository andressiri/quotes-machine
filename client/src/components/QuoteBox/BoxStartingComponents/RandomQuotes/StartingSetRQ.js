import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import {Routes, Route, useLocation} from 'react-router-dom';
import CancelBtn from '../../../CancelBtn.js';
import AutoBtn from './AutoBtn.js';
import SetAutoTimeBtn from './SetAutoTimeBtn.js';
import NewQuoteBtn from './NewQuoteBtn.js';

function StartingSetRQ () {
  const {colors, fade} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fadeMenu, setFadeMenu] = fade.fadM;
  const location = useLocation();
  let cancelShow = 'Off';

  if (!(['/box/app'].includes(location.pathname))) {
    cancelShow = 'On';
  };

  return (
    <div className={`startingSetRQ BG-color${imgBGColor} text-color${colorNumber} fadeRoute${fadeMenu}`}>
      <Routes>
        <Route path='/app'  element={
          <div>
            <AutoBtn/>
            <SetAutoTimeBtn />
            <NewQuoteBtn />
          </div>
        } />
      </Routes>
      <div className={`cancel${cancelShow}`}>
        <CancelBtn />
      </div>
    </div>
  );
};

export default StartingSetRQ;