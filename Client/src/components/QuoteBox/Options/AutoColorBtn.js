import React, {useContext, useState} from "react";
import {Context} from "../../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function AutoColorBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [autoColorChange, setAutoColorChange] = colors.auto;
  const [isLoading, setIsLoading] = useState(false);
  
  function handleAutoColorBtn () {
    if (isLoading) return;
    setIsLoading(true);
    setAutoColorChange(!autoColorChange);
    setIsLoading(false);
  };  

  return (
    <div>
      {autoColorChange === true
        ? <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleAutoColorBtn}
            icon="check" />
        : <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleAutoColorBtn}
            icon="times" />
      }
    </div>
  );
};

export default AutoColorBtn;