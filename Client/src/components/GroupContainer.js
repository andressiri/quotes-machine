import React, { useContext } from "react";
import { Context } from "../Context.js";
import {Routes, Route } from 'react-router-dom';
import StartingContainer from "./StartingComponents/StartingContainer.js";
import ChooseTxtOrImgSet from "./ChooseTxtOrImgComponents/ChooseTxtOrImgSet.js";
import ShareCustomOrDefaultSet from "./ShareCustomOrDefaultComponents/ShareCustomOrDefaultSet.js";
import EditSet from "./EditComponents/EditSet.js";
import LoginForm from "./StartingComponents/Login&Save/LoginForm.js";
import LoggedInMenu from "./StartingComponents/Login&Save/LoggedInMenu.js";
import RegisterForm from "./StartingComponents/Login&Save/RegisterForm";

function GroupContainer() {
  const { colors } = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
    <div className={`groupContainer BG-color${imgBGColor}`}>
      <Routes>
        <Route path='/' element={<StartingContainer/>} />
        <Route path='/txtOrImg' element={<ChooseTxtOrImgSet />} />
        <Route path='/customOrDefault' element={<ShareCustomOrDefaultSet />} />
        <Route path='/edit' element={<EditSet />} />
        <Route path='/login' exact element={<LoginForm />} />
        <Route path='/loggedIn' element={<LoggedInMenu />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default GroupContainer;
