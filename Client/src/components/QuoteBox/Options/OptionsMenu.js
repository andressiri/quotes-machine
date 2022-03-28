import React from 'react';
import RestartDefaultBtn from './RestartDefaultBtn.js';
import AutoColorBtn from './AutoColorBtn.js';
import OptionsEditBtn from './OptionsEditBtn.js';

function OptionsMenu() {
  return (
    <div>
      <h2>Options</h2>
      <div style={{display: 'flex'}} >
        <RestartDefaultBtn />
        <p>Restart to default at new Quote</p>
      </div>
      <div style={{display: 'flex'}} >
        <AutoColorBtn />
        <p>Automatic color change</p>
      </div>
      <div style={{display: 'flex'}} >
        <OptionsEditBtn />
        <p>Edit Quote</p>
      </div>
    </div>   
  );
};

export default OptionsMenu;