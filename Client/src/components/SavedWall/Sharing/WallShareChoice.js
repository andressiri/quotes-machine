import React from 'react';
import ShareImageBtn from '../../SharingChoices/ShareImageBtn.js';
import ShareTextBtn from '../../SharingChoices/ShareTextBtn.js';

function WallShareChoice ({parentToChild}) {
  return (
    <div>
      <ShareTextBtn parentToChild={parentToChild} />
      <ShareImageBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default WallShareChoice;