import React from 'react';
import WallDeletedOkBtn from './WallDeletedOkBtn.js';

function WallQuoteDeleted ({parentToChild}) {
  const {config} = parentToChild;

  return (
    <div className={`wallMessageDiv BG-color${config.imgBG} text-color${config.colorNum}`}>
      <h2 className={'containerText'}>Quote has been deleted</h2>
      <WallDeletedOkBtn parentToChild={parentToChild} />
    </div>
  );
};

export default WallQuoteDeleted;