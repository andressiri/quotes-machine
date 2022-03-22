import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {Routes, Route } from 'react-router-dom';
import BoxStartingContainer from './BoxStartingComponents/BoxStartingContainer.js';
import BoxSharingSet from '../SharingComponents/BoxSharingSet.js';
import ChooseTxtOrImgSet from '../ChooseTxtOrImgComponents/ChooseTxtOrImgSet.js';
import EditOrOkSet from '../EditOrOkComponents/EditOrOkSet.js';
import EditSet from '../EditComponents/EditSet.js';
import LoginForm from '../Login/Login/LoginForm.js';
import VerifyEmail from '../Login/VerifyEmail/VerifyEmail.js';
import LoggedInMenu from '../Login/LoggedIn/LoggedInMenu.js';
import RegisterForm from '../Login/Register/RegisterForm';
import ForgotPassword from '../Login/PasswordRecovery/ForgotPassword.js';
import ChangePassword from '../Login/ChangePassword/ChangePassword.js';

function RouteContainer() {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
    <div className={`routeContainer BG-color${imgBGColor}`}>
      <Routes>
        <Route path='/app' exact element={<BoxStartingContainer />} />
        <Route path='/sharing' exact element={<BoxSharingSet />} />
        <Route path='/txtOrImg' exact element={<ChooseTxtOrImgSet />} />
        <Route path='/editOrOk' exact element={<EditOrOkSet />} />
        <Route path='/edit' exact element={<EditSet />} />
        <Route path='/login' exact element={<LoginForm />} />
        <Route path='/verifyEmail' exact element={<VerifyEmail />} />
        <Route path='/loggedIn' exact element={<LoggedInMenu />} />
        <Route path='/register' exact element={<RegisterForm />} />
        <Route path='/forgotPassword' exact element={<ForgotPassword />} />
        <Route path='/changePassword' exact element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default RouteContainer;
