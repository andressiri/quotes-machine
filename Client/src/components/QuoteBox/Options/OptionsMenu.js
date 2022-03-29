import React from 'react';
import RestartDefaultBtn from './RestartDefaultBtn.js';
import AutoColorBtn from './AutoColorBtn.js';
import OptionsEditBtn from './OptionsEditBtn.js';
import SaveOptionsBtn from './SaveOptionsBtn.js';
import CancelOptionsBtn from './CancelOptionsBtn.js';

function OptionsMenu({parentToChild}) {
  return (
    <div>
      <h2>Options</h2>
      <div style={{display: 'flex'}} >
        <RestartDefaultBtn />
        <p>Restart config after sharing</p>
      </div>
      <div style={{display: 'flex'}} >
        <AutoColorBtn />
        <p>Automatic color change</p>
      </div>
      <div style={{display: 'flex'}} >
        <OptionsEditBtn parentToChild={parentToChild}/>
        <p>Quote customize</p>
      </div>
      <CancelOptionsBtn />
      <SaveOptionsBtn parentToChild={parentToChild} />
    </div>   
  );
};

export default OptionsMenu;