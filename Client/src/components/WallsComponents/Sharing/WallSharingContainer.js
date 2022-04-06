import React from 'react';
import WallSharingCancelBtn from './WallSharingCancelBtn.js';
import CopyToClipboardBtn from '../../SharingComponents/CopyToClipboardBtn.js';
import TumblrBtn from '../../SharingComponents/TumblrBtn.js';
import TwitterBtn from '../../SharingComponents/TwitterBtn.js';
import FacebookBtn from '../../SharingComponents/FacebookBtn.js';
import EmailShareBtn from '../../SharingComponents/EmailShareBtn.js';

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