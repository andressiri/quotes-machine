import React from 'react';
import WallSharingCancelBtn from './WallSharingCancelBtn.js';
import CopyToClipboardBtn from '../../sharingComponents/CopyToClipboardBtn.js';
import TumblrBtn from '../../sharingComponents/TumblrBtn.js';
import TwitterBtn from '../../sharingComponents/TwitterBtn.js';
import FacebookBtn from '../../sharingComponents/FacebookBtn.js';
import EmailShareBtn from '../../sharingComponents/EmailShareBtn.js';

function SavedSharingContainer({parentToChild}) {
  
  return (
    <div>
      <CopyToClipboardBtn parentToChild={parentToChild} />
      <TumblrBtn parentToChild={parentToChild} />
      <TwitterBtn parentToChild={parentToChild} />
      <FacebookBtn parentToChild={parentToChild} />
      <EmailShareBtn parentToChild={parentToChild}/>
      <WallSharingCancelBtn parentToChild={parentToChild}/>
    </div>
  );
};

export default SavedSharingContainer;