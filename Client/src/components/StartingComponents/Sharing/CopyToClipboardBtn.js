import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import { useNavigate } from "react-router-dom";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
import './../../../styles/CopyToClipboardBtn.scss';

function CopyToClipboardBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const navigate = useNavigate();

  const stopAuto = useStopAuto();

  async function handleCopyToClip () {
    stopAuto();
    setShareChosen('Clipboard');
    navigate('/txtOrImg');
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleCopyToClip} icon={faPaperclip} />
  );
};

export default CopyToClipboardBtn;