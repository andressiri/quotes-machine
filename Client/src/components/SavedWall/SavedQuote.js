import React, {useContext, useRef} from 'react';
import {Context} from './../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SavedQuote({parentToChild}) {
  const {refs} = useContext(Context);
  const {config} = parentToChild;
  window[`ref${config._id}`] = useRef();
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
    <div className={`quote BG-color${config.imgBG} text-color${config.colorNum}`} ref={window[`ref${config._id}`]} id={`wallRefDiv${config._id}`}>
      <div>{/*This div helps to form a more accurate blob for image*/}
        <h1 className={`text`} style={textStyle} >
          <FontAwesomeIcon icon='quote-left' className={`quoteIcon`} />
          {` ${config.content} `}
          <FontAwesomeIcon icon='quote-right' className={`quoteIcon`} />
        </h1>
        <p style={authorStyle}>{`- ${config.author}`}</p>
      </div>
    </div >
  );
};

export default SavedQuote;