import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import { useNavigate } from "react-router-dom";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../../../styles/CopyToClipboardBtn.scss';

function CopyToClipboardBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [currentPath, setCurrentPath] = refs.path;
  const navigate = useNavigate();

  const stopAuto = useStopAuto();

  async function handleCopyToClip () {
    stopAuto();
    setShareChosen('Clipboard');
    setCurrentPath('/txtOrImg');
    navigate('/txtOrImg');
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleCopyToClip} icon="paperclip" />
  );
};

export default CopyToClipboardBtn;