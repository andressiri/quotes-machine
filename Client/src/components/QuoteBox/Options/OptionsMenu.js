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
        <h4>Restart config after sharing</h4>
      </div>
      <div style={{display: 'flex'}} >
        <AutoColorBtn />
        <h4>Automatic color change</h4>
      </div>
      <div style={{display: 'flex'}} >
        <OptionsEditBtn parentToChild={parentToChild}/>
        <h4>Quote customize</h4>
      </div>
      <CancelOptionsBtn />
      <SaveOptionsBtn parentToChild={parentToChild} />
    </div>
  );
};

export default OptionsMenu;