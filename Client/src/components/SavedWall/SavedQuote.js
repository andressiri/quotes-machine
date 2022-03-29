import React, {useContext} from 'react';
import {Context} from './../../Context.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SavedQuote({parentToChild}) {
  const {refs} = useContext(Context);
  const quoteRef = refs.refImg;
  const {config} = parentToChild;
  let adjustFontSize = config.fontS - 15;

  const textStyle = {
    fontFamily: `${config.fontF}`,
    fontWeight: `${config.boldF}`,
    fontStyle: `${config.italicF}`,
    textTransform: `${config.upperF}`, 
    fontSize: `${config.fontS}px`
  };
  const authorStyle = {
    fontFamily: `${config.fontF}`,
    fontWeight: `${config.boldF}`,
    fontStyle: `${config.italicF}`,
    textTransform: `${config.upperF}`, 
    fontSize: `${adjustFontSize}px`
  };

  return (    
    <div className={`quote BG-color${config.imgBG} text-color${config.colorNum}`} ref={quoteRef} id='refDiv'>
      <h1 id="text" className={`text`} style={textStyle} >
        <FontAwesomeIcon icon="quote-left" className={`quoteIcon`} />
        {` ${config.content} `}
        <FontAwesomeIcon icon="quote-right" className={`quoteIcon`} /> 
      </h1>
      <p id="author" style={authorStyle}>{`- ${config.author}`}</p>       
    </div >
  );
};

export default SavedQuote;