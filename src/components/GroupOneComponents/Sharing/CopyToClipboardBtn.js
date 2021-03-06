import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
import './../../../styles/RandomColor.scss';
import './../../../styles/CopyToClipboardBtn.scss';

function CopyToClipboardBtn() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupOne, setHideGroupOne] = groups.gOne;
  const [hideGroupTwo, setHideGroupTwo] = groups.gTwo;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();

  async function handleCopyToClip () {
    stopAuto();
    setShareChosen('Clipboard');
    setHideGroupOne('On');
    setHideGroupTwo('Off');
    setHideCancelBtn('Off');
  }

  return (
    <FontAwesomeIcon class={`clipBtn BG-color${colorNumber} text-color${imgBGColor} hide${hideGroupOne}`} onClick={handleCopyToClip} icon={faPaperclip} />
  );
}

export default CopyToClipboardBtn;