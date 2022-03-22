import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../../../styles/CopyToClipboardBtn.scss';

function CopyToClipboardBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const redirectTo = useRedirectTo();

  const stopAuto = useStopAuto();

  async function handleCopyToClip () {
    stopAuto();
    setShareChosen('Clipboard');
    redirectTo('/box/txtOrImg');
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleCopyToClip} icon="paperclip" />
  );
};

export default CopyToClipboardBtn;