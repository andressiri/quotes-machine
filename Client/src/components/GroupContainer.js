import React, { useContext } from "react";
import { Context } from "../Context.js";
import {Routes, Route } from 'react-router-dom';
import StartingContainer from "./StartingComponents/StartingContainer.js";
import ChooseTxtOrImgSet from "./ChooseTxtOrImgComponents/ChooseTxtOrImgSet.js";
import ShareCustomOrDefaultSet from "./ShareCustomOrDefaultComponents/ShareCustomOrDefaultSet.js";
import EditSet from "./EditComponents/EditSet.js";
import LoginForm from "./StartingComponents/Login&Save/LoginForm.js";
import VerifyEmail from "./StartingComponents/Login&Save/VerifyEmail.js";
import LoggedInMenu from "./StartingComponents/Login&Save/LoggedInMenu.js";
import RegisterForm from "./StartingComponents/Login&Save/RegisterForm";

function GroupContainer() {
  const { colors } = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
    <div className={`groupContainer BG-color${imgBGColor}`}>
      <Routes>
        <Route path='/' exact element={<StartingContainer />} />
        <Route path='/txtOrImg' exact element={<ChooseTxtOrImgSet />} />
        <Route path='/customOrDefault' exact element={<ShareCustomOrDefaultSet />} />
        <Route path='/edit' exact element={<EditSet />} />
        <Route path='/login' exact element={<LoginForm />} />
        <Route path='/verifyEmail' exact element={<VerifyEmail />} />
        <Route path='/loggedIn' exact element={<LoggedInMenu />} />
        <Route path='/register' exact element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default GroupContainer;
