import React, {useState, useContext} from 'react';
import {Context} from './Context.js';
import QuoteBox from './components/QuoteBox.js';
import './styles/App.css';
import './styles/RandomColor.scss'

function App() {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;  
  
  return (
    <div className={`App BG-color${colorNumber}`}>
      <QuoteBox />
    </div>
  );
}

export default App;
