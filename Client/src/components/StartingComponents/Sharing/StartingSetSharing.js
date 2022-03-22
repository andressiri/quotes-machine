import React from 'react';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';
import SaveBtn from './SaveBtn.js';
import SavedWallBtn from './SavedWallBtn.js';

function StartingSetSharing () {
  return (
    <div>
      <h2 className={`shareIt`} >Share it!</h2>
      <CopyToClipboardBtn />
      <TumblrBtn />
      <TwitterBtn />
      <SaveBtn />
      <SavedWallBtn />
    </div>    
  );
};

export default StartingSetSharing;