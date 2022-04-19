import React from 'react';
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';
import FacebookBtn from './FacebookBtn.js';
import EmailShareBtn from './EmailShareBtn.js';

function BoxSharingSet({parentToChild}) {
  return (
    <div className={'routeColumnContainer'} style={{minHeight: '200px'}}>
      <h2>Share Quote</h2>
      <div className={'flexDiv'}>
        <div>
          <CopyToClipboardBtn parentToChild={parentToChild} />
          <TumblrBtn parentToChild={parentToChild} />
          <TwitterBtn parentToChild={parentToChild} />
        </div>
        <div>
          <FacebookBtn parentToChild={parentToChild} />
          <EmailShareBtn parentToChild={parentToChild} />
        </div>
      </div>
    </div>
  );
};

export default BoxSharingSet;