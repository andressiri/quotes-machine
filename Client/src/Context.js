import React, {createContext, useState, useRef} from "react";
import propTypes from 'prop-types'; // eslint-plugin-react may not detect props types imported with props and throw error "'children' is missing in props validation"

export const Context = createContext();

export const ContextProvider = (props) => {
  //colors
  const [colorNumber, setColorNumber] = useState(0);
  const [imgBGColor, setImgBGColor] = useState(7);  
  //quote
  const [quoteText, setQuoteText] = useState('Welcome to my quotes machine.');
  const [author, setAuthor] = useState('Andrés Siri');
  const [fadeQuote, setFadeQuote] = useState('In');
  const [savedQuotesArray, setSavedQuotesArray] = useState([]);
  //auto
  const [handleAuto, setHandleAuto] = useState('Interval is off');
  const [autoClass, setAutoClass] = useState(false);
  const [autoTime, setAutoTime] = useState(10000);
  //refs
  const quoteRef = useRef('null');
  const [shareChosen, setShareChosen] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);
  const [currentPath, setCurrentPath] = useState('/box/app');
  const [loggedIn, setLoggedIn] = useState(false);
  const [verified, setVerified] = useState(false);
  const [emailToUpdate, setEmailToUpdate] = useState('');
  //custom ---> Edit menu
  const [fontFam, setFontFam] = useState('Arial, Helvetica, sans-serif');
  const [boldFont, setBoldFont] = useState('normal');
  const [italicFont, setItalicFont] = useState('normal');
  const [upperFont, setUpperFont] = useState('none');
  const [fSize, setFSize] = useState(35);
  //gall
  const [gallArray, setGallArray] = useState([{text: quoteText, author: author}]);
  const [gallChoose, setGallChoose] = useState(0);
  //forms
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [password2Value, setPassword2Value] = useState('');
  const [codeValue, setCodeValue] = useState('');
  //timers
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = useState(0);
  const [checkCodeInterval, setCheckCodeInterval] = useState('Interval is off'); 
  const [checkWaitMsg, setCheckWaitMsg] = useState(false); 
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = useState(0);  
  const [sendEmailInterval, setSendEmailInterval] = useState('Interval is off'); 
  const [sendWaitMsg, setSendWaitMsg] = useState(false); 
  
  return (
    <Context.Provider value={{
      colors: {
        colorNum: [colorNumber, setColorNumber],
        imgBG: [imgBGColor, setImgBGColor],
      },
      quote: {
        quoteTxt: [quoteText, setQuoteText],
        auth: [author, setAuthor],
        fadQ: [fadeQuote, setFadeQuote],
        saved: [savedQuotesArray, setSavedQuotesArray]
      },
      auto: {
        hAuto: [handleAuto, setHandleAuto],
        aClass: [autoClass, setAutoClass],
        aTime: [autoTime, setAutoTime]
      },
      refs: {
        refImg: quoteRef,
        sChosen: [shareChosen, setShareChosen],
        msg: [messagesArray, setMessagesArray],
        path: [currentPath, setCurrentPath],
        logged: [loggedIn, setLoggedIn],
        ver: [verified, setVerified],
        email: [emailToUpdate, setEmailToUpdate]
      },
      custom: {
        fontF: [fontFam, setFontFam],
        boldF: [boldFont, setBoldFont],
        italicF: [italicFont, setItalicFont],
        upperF: [upperFont, setUpperFont],
        fontS: [fSize, setFSize]
      },
      gall: {
        gallA: [gallArray, setGallArray],
        gallCh: [gallChoose, setGallChoose]
      },
      forms: {
        name: [nameValue, setNameValue],
        email: [emailValue, setEmailValue],
        pass: [passwordValue, setPasswordValue],
        pass2: [password2Value, setPassword2Value],
        code: [codeValue, setCodeValue]
      },
      timers: {
        check: [checkCodeBtnTimer, setCheckCodeBtnTimer],
        codeInt: [checkCodeInterval, setCheckCodeInterval],
        checkWait: [checkWaitMsg, setCheckWaitMsg],
        send: [sendEmailBtnTimer, setSendEmailBtnTimer],
        sendInt: [sendEmailInterval, setSendEmailInterval],
        sendWait: [sendWaitMsg, setSendWaitMsg]
      }
    }}>
      {props.children}
    </Context.Provider>
  );  
};

ContextProvider.propTypes = {
  children: propTypes.any,
};