import React, {createContext, useState, useRef} from 'react';
import propTypes from 'prop-types'; // eslint-plugin-react may not detect props types imported with props and throw error "'children' is missing in props validation"

export const Context = createContext();

export const ContextProvider = (props) => {
  //colors
  const [colorNumber, setColorNumber] = useState(0);
  const [imgBGColor, setImgBGColor] = useState(7);
  const [autoColorChange, setAutoColorChange] = useState(true);
  //quote
  const [quoteText, setQuoteText] = useState('Welcome to my quotes machine.');
  const [author, setAuthor] = useState('Andrés Siri');
  const savedQuotesArray = useRef(['No quotes saved to show']);
  const savedQuotesBackup = useRef(['No quotes saved to show']);
  const savedSearchBackup = useRef([]);
  const searchArray = useRef(['No search requested yet']);
  const searchBackup = useRef(['No search requested yet']);
  //fade
  const [fadeWall, setFadeWall] = useState('In');
  const [fadeQuote, setFadeQuote] = useState('In');
  const [fadeMenu, setFadeMenu] = useState('In');
  //auto
  const [handleAuto, setHandleAuto] = useState('Interval is off');
  const [autoClass, setAutoClass] = useState(false);
  const [autoTime, setAutoTime] = useState(10000);
  const [autoSeconds, setAutoSeconds] = useState(10);
  const [autoTimer, setAutoTimer] = useState('Interval is off');
  //refs
  const quoteRef = useRef();
  const shareChosen = useRef('');
  const [message, setMessage] = useState('');
  const [currentPath, setCurrentPath] = useState('/box/app');
  const [loggedIn, setLoggedIn] = useState(false);
  const [verified, setVerified] = useState(false);
  const emailReference = useRef('');
  const auxRef = useRef('');
  const quotesArrDontExists = useRef(true);
  const searching = useRef(false);
  const isLoadingQuotes = useRef(false);
  const wallItemsShowed = useRef(10);
  const byQuoteTab = useRef(false);
  const byQuoteArray = useRef([]);
  const byAuthorTab = useRef(false);
  const byAuthorArray = useRef([]);
  const customTab = useRef(false);
  const customQuotesArray = useRef([]);
  const favoriteTab = useRef(false);
  const favoriteQuotesArray = useRef([]);
  //Edit menu
  const [fontFam, setFontFam] = useState('Arial, Helvetica, sans-serif');
  const [boldFont, setBoldFont] = useState('normal');
  const [italicFont, setItalicFont] = useState('normal');
  const [upperFont, setUpperFont] = useState('none');
  const [fSize, setFSize] = useState(35);
  const [restartDefaultObj, setRestartDefaultObj] = useState(true);
  const [configBackup, setConfigBackup] = useState({
    colorNum: 0,
    imgBG: 7,
    fontF: 'Arial, Helvetica, sans-serif',
    boldF: 'normal',
    italicF: 'normal',
    upperF: 'none',
    fontS: 35
  });
  //gall
  const [gallArray, setGallArray] = useState([{text: quoteText, author: author, custom: false}]);
  const [gallChoose, setGallChoose] = useState(0);
  //forms
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [password2Value, setPassword2Value] = useState('');
  const [codeValue, setCodeValue] = useState('');
  const [customQuoteValue, setCustomQuoteValue] = useState('');
  const [customAuthorValue, setCustomAuthorValue] = useState('');
  const searchValue = useRef('');
  //timers
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = useState(0);
  const [checkCodeInterval, setCheckCodeInterval] = useState('Interval is off');
  const [checkWaitMsg, setCheckWaitMsg] = useState(false);
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = useState(0);
  const [sendEmailInterval, setSendEmailInterval] = useState('Interval is off');
  const [sendWaitMsg, setSendWaitMsg] = useState(false);
  //force
  const [forceUpdate, setForceUpdate] = useState(0);
  const [updateForced, setUpdateForced] = useState(0);
  
  return (
    <Context.Provider value={{
      colors: {
        colorNum: [colorNumber, setColorNumber],
        imgBG: [imgBGColor, setImgBGColor],
        auto: [autoColorChange, setAutoColorChange]
      },
      quote: {
        quoteTxt: [quoteText, setQuoteText],
        auth: [author, setAuthor],
        saved: savedQuotesArray,
        savedBUp: savedQuotesBackup,
        savedSearch: savedSearchBackup,
        search: searchArray,
        searchBUp: searchBackup
      },
      fade: {
        fadW: [fadeWall, setFadeWall],
        fadQ: [fadeQuote, setFadeQuote],
        fadM: [fadeMenu, setFadeMenu]
      },
      auto: {
        hAuto: [handleAuto, setHandleAuto],
        aClass: [autoClass, setAutoClass],
        aTime: [autoTime, setAutoTime],
        sec: [autoSeconds, setAutoSeconds],
        timer: [autoTimer, setAutoTimer]
      },
      refs: {
        refImg: quoteRef,
        sChosen: shareChosen,
        msg: [message, setMessage],
        path: [currentPath, setCurrentPath],
        logged: [loggedIn, setLoggedIn],
        ver: [verified, setVerified],
        email: emailReference,
        aux: auxRef,
        arrExists: quotesArrDontExists,
        searching: searching,
        loading: isLoadingQuotes,
        wallItems: wallItemsShowed,
        byQTab: byQuoteTab,
        byQArr: byQuoteArray,
        byATab: byAuthorTab,
        byAArr: byAuthorArray,
        customT: customTab,
        customA: customQuotesArray,
        favoriteT: favoriteTab,
        favoriteA: favoriteQuotesArray,
      },
      edit: {
        fontF: [fontFam, setFontFam],
        boldF: [boldFont, setBoldFont],
        italicF: [italicFont, setItalicFont],
        upperF: [upperFont, setUpperFont],
        fontS: [fSize, setFSize],
        auto: [restartDefaultObj, setRestartDefaultObj],
        cBackup: [configBackup, setConfigBackup]
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
        code: [codeValue, setCodeValue],
        customQ: [customQuoteValue, setCustomQuoteValue],
        customA: [customAuthorValue, setCustomAuthorValue],
        search: searchValue
      },
      timers: {
        check: [checkCodeBtnTimer, setCheckCodeBtnTimer],
        codeInt: [checkCodeInterval, setCheckCodeInterval],
        checkWait: [checkWaitMsg, setCheckWaitMsg],
        send: [sendEmailBtnTimer, setSendEmailBtnTimer],
        sendInt: [sendEmailInterval, setSendEmailInterval],
        sendWait: [sendWaitMsg, setSendWaitMsg]
      },
      force: {
        update: [forceUpdate, setForceUpdate],
        forced: [updateForced, setUpdateForced]
      }
    }}>
      {props.children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: propTypes.any,
};