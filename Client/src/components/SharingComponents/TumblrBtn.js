import React, {useContext} from "react";
import {Context} from "./../../Context.js";
import useRedirectTo from "./../../functions/useRedirectTo.js";
import useStopAuto from './../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TumblrBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();
  
  async function handleTumblr () {
    stopAuto();
    setShareChosen('Tumblr');
    redirectTo('/box/txtOrImg');
  };  

  return (    
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleTumblr}
      icon={["fab", "tumblr"]} />
  );
};

export default TumblrBtn;