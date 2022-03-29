import React from "react";
import ShareImageBtn from './ShareImageBtn.js';
import ShareTextBtn from './ShareTextBtn.js';
import EditAndShareImgBtn from "./EditAndShareImgBtn.js";

function ChooseTxtOrImgSet ({parentToChild}) {
  return (
    <div>
      <ShareTextBtn />
      <ShareImageBtn />
      <EditAndShareImgBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default ChooseTxtOrImgSet;