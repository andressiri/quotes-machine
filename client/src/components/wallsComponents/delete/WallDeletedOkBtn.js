import React, {useContext, useEffect, useRef} from 'react';
import {Context} from '../../../Context.js';
import {useLocation} from 'react-router-dom';
import useGetArrayToCheck from '../../../functions/quoteFunctions/useGetArrayToCheck.js';
import useGetIndexAtBackup from '../../../functions/quoteFunctions/useGetIndexAtBackup.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallDeletedOkBtn ({parentToChild}) {
  const {quote, refs, force} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const searchArray = quote.search;
  const searchBackup = quote.searchBUp;
  const customTab = refs.customT;
  const favoriteTab = refs.favoriteT;
  const byQuoteTab = refs.byQTab;
  const byAuthorTab = refs.byATab;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index, wall} = parentToChild;
  const notClickedBefore = useRef(true);
  const getArrayToCheck = useGetArrayToCheck();
  const getIndexAtBackup = useGetIndexAtBackup();
  const location = useLocation();
  
  const handleWallDeletedOkBtn = () => {
    let arrayToCheck = getArrayToCheck(wall);
    const indexAtBackup = getIndexAtBackup(index, wall);
    const msg = 'No quotes to show left here';

    if (wall === 'wall/saved') {
      if (customTab.current === true || favoriteTab.current === true) arrayToCheck.splice(index, 1);
      savedQuotesArray.current.splice(indexAtBackup, 1);
      savedQuotesBackup.current.splice(indexAtBackup, 1);
      if (arrayToCheck.length < 1) {
        if (savedQuotesArray.current.length < 1) {
          savedQuotesArray.current = [msg];
          savedQuotesBackup.current = [msg];
        };
        arrayToCheck[0] = msg;
      };
    };

    if (wall === 'wall/search') {
      if (byQuoteTab.current === true || byAuthorTab.current === true) arrayToCheck.splice(index, 1);
      searchArray.current.splice(indexAtBackup, 1);
      searchBackup.current.splice(indexAtBackup, 1);
      if (arrayToCheck.length < 1) {
        if (searchArray.current.length < 1) {
          searchArray.current = [msg];
          searchBackup.current = [msg];
        };
        arrayToCheck[0] = msg;
      };
    };
    setForceUpdate(forceUpdate => forceUpdate + 1);
    notClickedBefore.current = false;
  };

  // handle user ignore
  useEffect(() => {
    if (location.pathname !== `/${wall}/${config._id}/delete/confirmation`
      && location.pathname !== `/${wall}`
      && notClickedBefore.current === true) handleWallDeletedOkBtn();
  }, [location.pathname]);
  // handle unmount
  useEffect(() => {
    return () => {
      if (notClickedBefore.current === true) handleWallDeletedOkBtn();
    }
  }, []);

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallDeletedOkBtn}
      icon='check'
    />
  );
};

export default WallDeletedOkBtn;