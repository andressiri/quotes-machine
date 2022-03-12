import React from 'react';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';

function StartingSetSharing () {
  return (
    <div>
      <h2 className={`shareIt`} >Share it!</h2>
      <CopyToClipboardBtn />
      <TumblrBtn />
      <TwitterBtn />
    </div>    
  );
};

export default StartingSetSharing;