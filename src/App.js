import React, {useContext} from 'react';
import {Context} from './Context.js';
import QuoteBox from './components/QuoteBox.js';
import './styles/App.scss';
import './styles/RandomColor.scss'

function App() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;  
  
  return (
    <div className={`App BG-color${colorNumber}`}>
      <QuoteBox />
    </div>
  );
}

export default App;
