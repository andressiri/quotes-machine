import React from 'react';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';


function BoxSharingSet() {
  return (
    <div>
      <CopyToClipboardBtn />
      <TumblrBtn />
      <TwitterBtn />
    </div>   
  );
};

export default BoxSharingSet;