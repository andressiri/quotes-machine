import React, {useContext} from 'react';
import {Context} from "./../../../Context.js";
import CopyToClipboardBtn from './CopyToClipboardBtn.js';
import TumblrBtn from './TumblrBtn.js';
import TwitterBtn from './TwitterBtn.js';

function GroupOneSharing () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;

  return (
    <div>
      <h3 className={`text-color${colorNumber} shareIt`} >Share it</h3>
      <CopyToClipboardBtn />
      <TumblrBtn />
      <TwitterBtn />
    </div>    
  );
};

export default GroupOneSharing;