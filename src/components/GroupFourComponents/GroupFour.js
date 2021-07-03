import React, {useContext} from "react";
import {Context} from "./../../Context.js";
import BackgroundColor from './backgroundColor/BackgroundColor.js';
import TextColor from './textColor/TextColor.js';
import SendCustomBtn from './SendCustomBtn.js';

function GroupFour () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [hideGroupFour, setHideGroupFour] = groups.gFour;

  return (
    <div className={`hide${hideGroupFour}`} >
      <BackgroundColor />
      <TextColor />
      <SendCustomBtn />    
    </div>    
  );
};

export default GroupFour;