import React, {useContext} from "react";
import {Context} from "../../../Context.js";
//import useRedirectTo from "../../../functions/useRedirectTo.js";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../../../styles/CopyToClipboardBtn.scss';

function SaveBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  //const redirectTo = useRedirectTo();
  const stopAuto = useStopAuto();

  async function handleSave () {
    stopAuto();
    const test = await fetch('/users/test');
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleSave} icon="save" />
  );
};

export default SaveBtn;