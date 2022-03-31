import {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../useRedirectTo.js';

function useCheckLoginCondition () {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const redirectTo = useRedirectTo();
    
  const checkLoginCondition = function checkLoggedCondition () {
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
      redirectTo('/box/verifyEmail');
      return false;
    } else {
      return true;
    };
  };  
  return checkLoginCondition;
};

export default useCheckLoginCondition;