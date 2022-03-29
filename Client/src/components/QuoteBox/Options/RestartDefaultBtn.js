import React, {useContext, useState} from "react";
import {Context} from "../../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function RestartDefaultBtn () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [restartDefault, setRestartDefault] = edit.auto;
  const [isLoading, setIsLoading] = useState(false);
  
  function handleRestartDefaultBtn () {
    if (isLoading) return;
    setIsLoading(true);
    setRestartDefault(!restartDefault);
    //TODO: update at user
    setIsLoading(false);
  };  

  return (
    <div>
      {restartDefault === true
        ? <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleRestartDefaultBtn}
            icon="check" />
        : <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleRestartDefaultBtn}
            icon="times" />
      }
    </div>
  );
};

export default RestartDefaultBtn;