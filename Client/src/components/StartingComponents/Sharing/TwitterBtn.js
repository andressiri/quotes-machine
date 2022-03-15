import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import useStopAuto from '../../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../../../styles/icon.scss';

function TwitterBtn() {
  const {refs} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();

  function handleTwitter () {
    stopAuto();
    setShareChosen('Twitter');
    redirectTo('/txtOrImg');
  };

  return (
    <FontAwesomeIcon className={`icon`} onClick={handleTwitter} icon={["fab", "twitter-square"]} />
  );
};

export default TwitterBtn;
