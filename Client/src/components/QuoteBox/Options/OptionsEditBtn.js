import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function OptionsEditBtn () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  
  function handleOptionsEditBtn () {
    console.log('in progress');
    //TODO: redirect to edit menu (menu that will edit and save);
  };  

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleOptionsEditBtn}
      icon="pen" />
  );
};

export default OptionsEditBtn;