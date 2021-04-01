import React, {useState, useContext} from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox.js';
import {ColorContext} from './ColorContext.js';
import './RandomColor.scss'

function App() {
  const [colorNumber, setColorNumber] = useContext(ColorContext);
  
  return (
    <div className={`App BG-color${colorNumber}`}>
      <QuoteBox />
    </div>
  );
}

export default App;
