import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareImg from '../../functions/useShareImg.js';

function EditOkBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();  
  
  async function handleEditOk () {
    await shareImg();
    setShareChosen('');
    redirectTo('/box/app');
    setImgBGColor(8);
  }; 

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleEditOk} icon="check" />
  );
};

export default EditOkBtn;