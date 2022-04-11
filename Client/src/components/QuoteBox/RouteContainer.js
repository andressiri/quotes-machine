import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {Routes, Route, useLocation } from 'react-router-dom';
import BoxStartingContainer from './boxStartingComponents/BoxStartingContainer.js';
import BoxSharingSet from '../sharingComponents/BoxSharingSet.js';
import OptionsMenu from './options/OptionsMenu.js';
import SharingChoices from '../sharingChoices/SharingChoices.js';
import EditSet from '../editComponents/EditSet.js';
import CustomQuoteContainer from './createCustomQuote/CustomQuoteContainer.js';
import LoginForm from '../login/login/LoginForm.js';
import VerifyEmail from '../login/verifyEmail/VerifyEmail.js';
import LoggedInMenu from '../login/loggedIn/LoggedInMenu.js';
import RegisterForm from '../login/register/RegisterForm';
import ForgotPassword from '../login/changePassword/forgotPassword/ForgotPassword.js';
import ChangePassword from '../login/changePassword/ChangePassword.js';
import ChangeName from '../login/changeName/ChangeName.js';
import BoxMessages from './boxMessages/BoxMessages.js';

function RouteContainer() {
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
    <div className={`routeContainer BG-color${imgBGColor}`}>
      <div className={`fadeRoute${fadeMenu}`}>
        {currentPath !== location.pathname
        ? <Routes>
            <Route path='/app' exact element={<BoxStartingContainer parentToChild={{config: editConfiguration, index: null}} />} />
          </Routes>
        : <Routes>
            <Route path='/app' exact element={<BoxStartingContainer parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/sharing' exact element={<BoxSharingSet parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/options' exact element={<OptionsMenu parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/sharingChoices' exact element={<SharingChoices parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/editSharing' exact element={<EditSet parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/editConfig' exact element={<EditSet parentToChild={{config: editConfiguration, index: null}} />} />
            <Route path='/customQuote' exact element={<CustomQuoteContainer />} />
            <Route path='/login' exact element={<LoginForm />} />
            <Route path='/verifyEmail' exact element={<VerifyEmail />} />
            <Route path='/loggedIn' exact element={<LoggedInMenu />} />
            <Route path='/register' exact element={<RegisterForm />} />
            <Route path='/forgotPassword' exact element={<ForgotPassword />} />
            <Route path='/changePassword' exact element={<ChangePassword />} />
            <Route path='/changeName' exact element={<ChangeName />} />
            <Route path='/message' exact element={<BoxMessages />} />
          </Routes>
        }
      </div>
    </div>
  );
}

export default RouteContainer;