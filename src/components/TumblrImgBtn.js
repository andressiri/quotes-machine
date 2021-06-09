import React, {useContext} from "react";
import {Context} from "./../Context.js";
import useStopAuto from '../functions/useStopAuto.js';
import getImgUrl from '../functions/getImgUrl.js';
import clickLink from '../functions/clickLink.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblrSquare} from "@fortawesome/free-brands-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';


function TumblrImgBtn() {
  const {colorNum, quote, auth, auto, aClass, aTime, ref} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const quoteRef = ref.current;
  const stopAuto = useStopAuto();
  
  async function handleTumblrImg () {
    stopAuto();
    const imgUrl = await getImgUrl(quoteRef); 
    const link = `https://www.tumblr.com/widgets/share/tool?posttype=photo&tags=quotes&content=${imgUrl}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`;  
    clickLink(link);
  };  

  return (    
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleTumblrImg} icon={faTumblrSquare} />
  );
}

export default TumblrImgBtn;
