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
    <div className={'routeColumnContainer'}>
      <h3 className={'containerText'}>You are already logged in, do you want to log out?</h3>
      <div className='flexDiv'>
        <KeepLoggedBtn />
        <LogoutBtn />
      </div>
      <h3 className={'pointer containerText'} onClick={handleChangeName}>Change Name</h3>
      <h3 className={'pointer containerText'} onClick={handleChangePassword}>Change Password</h3>
    </div>
    );
};

export default LoggedInMenu;