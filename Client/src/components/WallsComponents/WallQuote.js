import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallQuote({parentToChild}) {
  const {config} = parentToChild;
  window[`ref${config._id}`] = useRef();
  let adjustFSize = config.fontS;
  let breakpoint = 120;
  if (window.innerWidth <= 300) breakpoint = breakpoint - 20;
  if (config.upperF === 'uppercase') breakpoint = breakpoint - 20;
  if (config.fontS >= 37) breakpoint = breakpoint - 10;
  if (config.fontS >= 39) breakpoint = breakpoint - 10;
  if (config.content.length >= breakpoint) adjustFSize = config.fontS * 0.9;
  if (config.content.length >= breakpoint * 1.33) adjustFSize = config.fontS * 0.85;
  if (config.content.length >= breakpoint * 1.66) adjustFSize = config.fontS * 0.8;
  if (config.content.length >= breakpoint * 2) adjustFSize = config.fontS * 0.75;
  let contentFSize = `calc(0.8vw * ${adjustFSize/3}`;
  let authorFSize = `calc(0.8vw * ${adjustFSize/3} * 0.6)`;
  if (window.innerWidth >= 500) {
    contentFSize = `calc(3.5px * ${adjustFSize/3})`;
    authorFSize = `calc(3.5px * ${adjustFSize/3} * 0.6)`;
  };

  const textStyle = {
    fontFamily: `${config.fontF}`,
    fontWeight: `${config.boldF}`,
    fontStyle: `${config.italicF}`,
    textTransform: `${config.upperF}`,
    fontSize: `${contentFSize}`
  };
  const authorStyle = {
    fontFamily: `${config.fontF}`,
    fontWeight: `${config.boldF}`,
    fontStyle: `${config.italicF}`,
    textTransform: `${config.upperF}`,
    fontSize: `${authorFSize}`
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

export default WallQuote;