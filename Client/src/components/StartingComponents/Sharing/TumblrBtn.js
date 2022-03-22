import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import useStopAuto from '../../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../../../styles/icon.scss';

function TumblrBtn() {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();
  
  async function handleTumblr () {
    stopAuto();
    setShareChosen('Tumblr');
    redirectTo('/box/txtOrImg');
  };  

  return (    
    <FontAwesomeIcon className={`icon`} onClick={handleTumblr} icon={["fab", "tumblr-square"]} />
  );
};

export default TumblrBtn;