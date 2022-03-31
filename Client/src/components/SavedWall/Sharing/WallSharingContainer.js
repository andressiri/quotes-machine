import React from "react";
import WallSharingCancelBtn from "./WallSharingCancelBtn.js";
import CopyToClipboardBtn from "../../SharingComponents/CopyToClipboardBtn.js";
import TumblrBtn from "../../SharingComponents/TumblrBtn.js";
import TwitterBtn from "../../SharingComponents/TwitterBtn.js";
import EmailShareBtn from "../../SharingComponents/EmailSharing/EmailShareBtn.js";

function SavedSharingContainer({parentToChild}) {
  
  return (
    <div>
      <CopyToClipboardBtn parentToChild={parentToChild} />
      <TumblrBtn parentToChild={parentToChild} />
      <TwitterBtn parentToChild={parentToChild} />
      <EmailShareBtn parentToChild={parentToChild}/>
      <WallSharingCancelBtn parentToChild={parentToChild}/>
    </div>   
  );
};

export default SavedSharingContainer;