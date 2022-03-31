import React from 'react';
import ShareImageBtn from './ShareImageBtn.js';
import ShareTextBtn from './ShareTextBtn.js';
import EditAndShareImgBtn from "./EditAndShareImgBtn.js";

function SharingChoices ({parentToChild}) {
  return (
    <div>
      <ShareTextBtn parentToChild={parentToChild} />
      <ShareImageBtn parentToChild={parentToChild} />
      <EditAndShareImgBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default SharingChoices;