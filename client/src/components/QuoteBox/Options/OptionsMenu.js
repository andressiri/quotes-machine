import React from 'react';
import RestartDefault from './RestartDefault.js';
import AutoColor from './AutoColor.js';
import OptionsEdit from './OptionsEdit.js';
import SaveOptionsBtn from './SaveOptionsBtn.js';
import CancelOptionsBtn from './CancelOptionsBtn.js';


function OptionsMenu({parentToChild}) {

  return (
    <div className={'routeColumnContainer'}>
      <h2>Options</h2>
      <RestartDefault />
      <AutoColor />
      <OptionsEdit parentToChild={parentToChild}/>
      <div className={'flexDiv'}>
        <CancelOptionsBtn />
        <SaveOptionsBtn parentToChild={parentToChild} />
      </div>
    </div>
  );
};

export default OptionsMenu;