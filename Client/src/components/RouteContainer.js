import React, { useContext } from "react";
import { Context } from "../Context.js";
import {Routes, Route } from 'react-router-dom';
import StartingContainer from "./StartingComponents/StartingContainer.js";
import ChooseTxtOrImgSet from "./ChooseTxtOrImgComponents/ChooseTxtOrImgSet.js";
import ShareCustomOrDefaultSet from "./ShareCustomOrDefaultComponents/ShareCustomOrDefaultSet.js";
import EditSet from "./EditComponents/EditSet.js";
import LoginForm from "./Login/Login/LoginForm.js";
import VerifyEmail from "./Login/VerifyEmail/VerifyEmail.js";
import LoggedInMenu from "./Login/LoggedIn/LoggedInMenu.js";
import RegisterForm from "./Login/Register/RegisterForm";
import ForgotPassword from "./Login/PasswordRecovery/ForgotPassword.js";
import ChangePassword from "./Login/ChangePassword/ChangePassword.js";

function RouteContainer() {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [colorNumber, setColorNumber] = colors.colorNum;

  return (
    <div className={`routeContainer BG-color${imgBGColor}`}>
      <Routes>
        <Route path='/app' exact element={<StartingContainer />} />
        <Route path='/txtOrImg' exact element={<ChooseTxtOrImgSet />} />
        <Route path='/customOrDefault' exact element={<ShareCustomOrDefaultSet />} />
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
