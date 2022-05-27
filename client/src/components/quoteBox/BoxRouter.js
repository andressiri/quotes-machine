import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {Routes, Route, useLocation } from 'react-router-dom';
import BoxStartingContainer from './boxStartingComponents/BoxStartingContainer.js';
import BoxMessages from './boxMessages/BoxMessages.js';
import CustomQuoteContainer from './createCustomQuote/CustomQuoteContainer.js';
import BoxSharingSet from '../sharingComponents/BoxSharingSet.js';
import SharingChoices from '../sharingChoices/SharingChoices.js';
import EditSet from '../editComponents/EditSet.js';
import OptionsMenu from './options/OptionsMenu.js';
import LoginForm from '../user/login/LoginForm.js';
import VerifyEmail from '../user/verifyEmail/VerifyEmail.js';
import LoggedInMenu from '../user/loggedIn/LoggedInMenu.js';
import RegisterForm from '../user/register/RegisterForm';
import ForgotPassword from '../user/changePassword/forgotPassword/ForgotPassword.js';
import ChangePassword from '../user/changePassword/ChangePassword.js';
import ChangeName from '../user/changeName/ChangeName.js';
import DeleteUser from '../user/deleteUser/DeleteUser.js';
import DeleteUserConfirmation from '../user/deleteUser/DeleteUserConfirmation.js';

function BoxRouter() {
  const {colors, quote, refs, fade, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [author, setAuthor] = quote.auth;
  const [fadeMenu, setFadeMenu] = fade.fadM;
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;
  const [currentPath, setCurrentPath] = refs.path;
  const location = useLocation();

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
    <div className={`boxContainer BG-color${imgBGColor}`}>
      <div className={`fadeRoute${fadeMenu}`}>
        {currentPath !== location.pathname
        ? <Routes>
            <Route path='/app' exact element={<BoxStartingContainer parentToChild={{config: editConfiguration, index: null}} />} />
          </Routes>
        : <Routes>
            <Route path='/app' exact element={<BoxStartingContainer parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/message' exact element={<BoxMessages />} />
            <Route path='/custom-quote' exact element={<CustomQuoteContainer />} />
            <Route path='/sharing' exact element={<BoxSharingSet parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/sharing/choices' exact element={<SharingChoices parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/sharing/edit' exact element={<EditSet parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/options' exact element={<OptionsMenu parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/options/edit' exact element={<EditSet parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/login' exact element={<LoginForm />} />
            <Route path='/logged-in' exact element={<LoggedInMenu />} />
            <Route path='/email/verification' exact element={<VerifyEmail />} />
            <Route path='/register' exact element={<RegisterForm />} />
            <Route path='/password/forgot' exact element={<ForgotPassword />} />
            <Route path='/password/change' exact element={<ChangePassword />} />
            <Route path='/name/change' exact element={<ChangeName />} />
            <Route path='/user/delete' exact element={<DeleteUser />} />
            <Route path='/user/delete/confirmation' exact element={<DeleteUserConfirmation />} />
          </Routes>
        }
      </div>
    </div>
  );
}

export default BoxRouter;