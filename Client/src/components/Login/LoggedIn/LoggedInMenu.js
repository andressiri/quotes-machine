import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import KeepLoggedBtn from './KeepLoggedBtn.js';
import LogoutBtn from './LogoutBtn.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function LoggedInMenu() {
  const {refs} = useContext(Context);
  const auxRef = refs.aux;
  const redirectTo = useRedirectTo();
  
  const handleChangePassword = () => {
    redirectTo('/box/email/verification');
  };

  const handleChangeName = () => {
    auxRef.current = 'name';
    redirectTo('/box/email/verification');
  };

  return (
    <div>
      <h4 className={`shareIt`} >You are already logged in, do you want to log out?</h4>
      <KeepLoggedBtn />
      <LogoutBtn />
      <p className={`shareIt`} onClick={handleChangePassword}>Change Password</p>
      <p className={`shareIt`} onClick={handleChangeName}>Change Name</p>
    </div>
    );
};

export default LoggedInMenu;