import React from 'react';
import RestartDefaultBtn from './RestartDefaultBtn.js';
import AutoColorBtn from './AutoColorBtn.js';
import OptionsEditBtn from './OptionsEditBtn.js';

function OptionsMenu() {
  return (
    <div>
      <h1>Options</h1>
      <div>
        <RestartDefaultBtn />
        <p>Restart to default at new Quote</p>
      </div>
      <div>
        <AutoColorBtn />
        <p>Automatic color change</p>
      </div>
      <div>
        <OptionsEditBtn />
        <p>Edit Quote</p>
      </div>
    </div>   
  );
};

export default OptionsMenu;