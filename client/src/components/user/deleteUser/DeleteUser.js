import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import CancelDeleteUserBtn from './CancelDeleteUserBtn.js';
import DeleteUserBtn from './DeleteUserBtn.js';

function DeleteUser () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  
  return (
    <div className={`flexDiv BG-color${imgBGColor} text-color${colorNumber}`} style={{minHeight: '200px'}}>
      <h2 className={`text`} >Do you want to delete your account?</h2>
      <CancelDeleteUserBtn />
      <DeleteUserBtn />
    </div>
  );
};

export default DeleteUser;