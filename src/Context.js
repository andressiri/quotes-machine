import React, {createContext, useState, useRef} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  //colors
  const [colorNumber, setColorNumber] = useState(0);
  const [imgBGColor, setImgBGColor] = useState(8);  
  const [imgTxtColor, setImgTxtColor] = useState('black');
  //quote
  const [quoteText, setQuoteText] = useState('Welcome to my quotes machines.');
  const [author, setAuthor] = useState('Andrés Siri');
  const [fadeQuote, setFadeQuote] = useState('In');
  //auto
  const [handleAuto, setHandleAuto] = useState('Interval is off');
  const [autoClass, setAutoClass] = useState(false);
  const [autoTime, setAutoTime] = useState(10000);
  //groups
  const [hideGroupOne, setHideGroupOne] = useState('Off');
  const [hideGroupTwo, setHideGroupTwo] = useState('On');
  const [hideGroupThree, setHideGroupThree] = useState('On');
  const [hideGroupFour, setHideGroupFour] = useState('On');
  const [hideCancelBtn, setHideCancelBtn] = useState('On');
  //refs
  const quoteRef = useRef('null');
  const [shareChosen, setShareChosen] = useState('');
  
  return (
    <Context.Provider value={{
      colors: {
        colorNum: [colorNumber, setColorNumber],
        imgBG: [imgBGColor, setImgBGColor],
        imgTxt: [imgTxtColor, setImgTxtColor]
      },
      quote: {
        quoteTxt: [quoteText, setQuoteText],
        auth: [author, setAuthor],
        fadQ: [fadeQuote, setFadeQuote]
      },
      auto: {
        hAuto: [handleAuto, setHandleAuto],
        aClass: [autoClass, setAutoClass],
        aTime: [autoTime, setAutoTime]
      },
      groups: {
        gOne: [hideGroupOne, setHideGroupOne],
        gTwo: [hideGroupTwo, setHideGroupTwo],
        gThree: [hideGroupThree, setHideGroupThree],
        gFour: [hideGroupFour, setHideGroupFour],
        cancel: [hideCancelBtn, setHideCancelBtn],
      },
      refs : {
        refImg: quoteRef,
        sChosen: [shareChosen, setShareChosen]
      }
    }}>
      {props.children}
    </Context.Provider>
  );
};