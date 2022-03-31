import React from 'react';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';
import EmailShareBtn from './EmailSharing/EmailShareBtn.js';

function BoxSharingSet({parentToChild}) {
  return (
    <div>
      <CopyToClipboardBtn parentToChild={parentToChild} />
      <TumblrBtn parentToChild={parentToChild} />
      <TwitterBtn parentToChild={parentToChild} />
      <EmailShareBtn parentToChild={parentToChild} />
    </div>   
  );
};

export default BoxSharingSet;