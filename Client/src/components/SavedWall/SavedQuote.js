import React, {useContext} from 'react';
import {Context} from './../../Context.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedQuote({parentToChild}) {
  const {refs} = useContext(Context);
  const quoteRef = refs.refImg;
  let adjustFontSize = parentToChild.config.fontS - 15;

  const textStyle = {
    fontFamily: `${parentToChild.config.fontF}`,
    fontWeight: `${parentToChild.config.boldF}`,
    fontStyle: `${parentToChild.config.italicF}`,
    textTransform: `${parentToChild.config.upperF}`, 
    fontSize: `${parentToChild.config.fontS}px`
  };
  const authorStyle = {
    fontFamily: `${parentToChild.config.fontF}`,
    fontWeight: `${parentToChild.config.boldF}`,
    fontStyle: `${parentToChild.config.italicF}`,
    textTransform: `${parentToChild.config.upperF}`, 
    fontSize: `${adjustFontSize}px`
  };

  return (    
    <div className={`quote BG-color${parentToChild.config.imgBG} text-color${parentToChild.config.colorNum}`} ref={quoteRef} id='refDiv'>
      <h1 id="text" className={`text`} style={textStyle} >
        <FontAwesomeIcon icon="quote-left" className={`quoteIcon`} />
        {` ${parentToChild.config.content} `}
        <FontAwesomeIcon icon="quote-right" className={`quoteIcon`} /> 
      </h1>
      <p id="author" style={authorStyle}>{`- ${parentToChild.config.author}`}</p>       
    </div >
  );
};

export default SavedQuote;