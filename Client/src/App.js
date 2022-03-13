import React, {useContext} from 'react';
import {Context} from './Context.js';
import {Routes, Route } from 'react-router-dom';
import QuoteBox from './components/QuoteBox.js';
import './styles/App.scss';
import './styles/colorChange.scss';

function App() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  
  return (
    <div className={`App BG-color${colorNumber}`}>
      <Routes>
        <Route path='*' element={<QuoteBox />} />      
      </Routes>
    </div>
  );
};

export default App;
