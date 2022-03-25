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
import OptionsMenu from './Options/OptionsMenu.js';
import BoxMessages from './BoxMessages/BoxMessages.js';

function RouteContainer() {
  const {colors, quote, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [author, setAuthor] = quote.auth;
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;


  const editConfiguration = {
    _id: 'This was called by QuoteBox',
    content: quoteText,
    author: author,
    colorNum: colorNumber,
    imgBG: imgBGColor,
    fontF: fontFam,
    boldF: boldFont,
    italicF: italicFont,
    upperF: upperFont,
    fontS: fSize
  };

  return (
    <div className={`routeContainer BG-color${imgBGColor}`}>
      <Routes>
        <Route path='/app' exact element={<BoxStartingContainer />} />
        <Route path='/sharing' exact element={<BoxSharingSet />} />
        <Route path='/txtOrImg' exact element={<ChooseTxtOrImgSet />} />
        <Route path='/editOrOk' exact element={<EditOrOkSet parentToChild={{config: editConfiguration, index: null}} />} />
        <Route path='/edit' exact element={<EditSet parentToChild={{config: editConfiguration, index: null}} />} />
        <Route path='/login' exact element={<LoginForm />} />
        <Route path='/verifyEmail' exact element={<VerifyEmail />} />
        <Route path='/loggedIn' exact element={<LoggedInMenu />} />
        <Route path='/register' exact element={<RegisterForm />} />
        <Route path='/forgotPassword' exact element={<ForgotPassword />} />
        <Route path='/changePassword' exact element={<ChangePassword />} />
        <Route path='/options' exact element={<OptionsMenu />} />
        <Route path='/message' exact element={<BoxMessages />} />
      </Routes>
    </div>
  );
}

export default RouteContainer;
