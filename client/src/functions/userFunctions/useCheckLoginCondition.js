import {useContext} from 'react';
import {Context} from '../../Context.js';
import {useLocation} from 'react-router-dom';
import useRedirectTo from '../useRedirectTo.js';

function useCheckLoginCondition () {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const redirectTo = useRedirectTo();
  const location = useLocation();
    
  const checkLoginCondition = () => {
    if (!loggedIn) {
      setTimeout(() => {  // Timeout to handle transition
        setMessage('You have to be logged in to do this');
      }, 250);
      redirectTo('/box/login');
      return false;
    } else if (!verified) {
      setTimeout(() => {  // Timeout to handle transition
        setMessage('You should verify your email to do this');
      }, 250);
      if (/wall/i.test(location.pathname)) {
        redirectToWall('/box/email/verification');
      } else {
        redirectTo('/box/email/verification');
      };
      return false;
    } else {
      return true;
    };
  };
  return checkLoginCondition;
};

export default useCheckLoginCondition;