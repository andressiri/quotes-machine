import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import { useNavigate } from "react-router-dom";
import useStopAuto from '../../../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function LoginBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [currentPath, setCurrentPath] = refs.path;

  const navigate = useNavigate();
  const stopAuto = useStopAuto();

  async function handleLoginBtn () {
    stopAuto();
    const loggedIn = false;
    if (!loggedIn) {
        setCurrentPath('/login');
        navigate('/login');
    } else {
        setCurrentPath('/loggedIn');
        navigate('/loggedIn');
    };    
  };

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleLoginBtn} icon="user" />
  );
};

export default LoginBtn;