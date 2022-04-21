import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import CancelDeleteUserBtn from './CancelDeleteUserBtn.js';
import DeleteUserConfirmationBtn from './DeleteUserConfirmationBtn.js';

function DeleteUserConfirmation () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  
  return (
    <div className={`flexDiv BG-color${imgBGColor} text-color${colorNumber}`} style={{minHeight: '200px'}}>
      <h2 className={`text`} >Are you sure? All your information will be lost and can't be recovered</h2>
      <CancelDeleteUserBtn />
      <DeleteUserConfirmationBtn />
    </div>
  );
};

export default DeleteUserConfirmation;