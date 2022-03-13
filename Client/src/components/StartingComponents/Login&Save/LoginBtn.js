import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import { useNavigate } from "react-router-dom";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../../../styles/CopyToClipboardBtn.scss';

function CopyToClipboardBtn() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  const navigate = useNavigate();
  const stopAuto = useStopAuto();

  async function handleLoginBtn () {
    stopAuto();
    const loggedIn = false;
    if (!loggedIn) {
        navigate('/login');
    } else {
        navigate('/loggedIn');
    };    
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleLoginBtn} icon="user" />
  );
};

export default CopyToClipboardBtn;