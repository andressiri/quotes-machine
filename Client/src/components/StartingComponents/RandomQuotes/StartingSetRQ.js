import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import {Routes, Route } from 'react-router-dom';
import AutoBtn from './AutoBtn.js';
import SetAutoTimeBtn from './SetAutoTimeBtn.js';
import NewQuoteBtn from './NewQuoteBtn.js';
import LoginBtn from '../Login/LoginBtn.js'

function StartingSetRQ () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
    <div className={`StartingSetRQ BG-color${imgBGColor} text-color${colorNumber}`}>
      <Routes>
        <Route path='/app'  element={
          <div>
            <AutoBtn/>
            <SetAutoTimeBtn />
            <NewQuoteBtn />
            <LoginBtn />
          </div>
        } />
      </Routes>
    </div>
  );
};

export default StartingSetRQ;