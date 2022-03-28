import {useContext} from 'react';
import {Context} from './../Context.js';
import useRedirectTo from "./useRedirectTo.js";

function useCheckLoginCondition () {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const redirectTo = useRedirectTo();
    
  const checkLoginCondition = function checkLoggedCondition () {
    if (!loggedIn) {
      setTimeout(() => {  // Timeout to handle transition
        setMessagesArray(['You have to be logged in to save']);
      }, 250);
      redirectTo('/box/login');
      return false;
    } else if (!verified) {
      setTimeout(() => {  // Timeout to handle transition
        setMessagesArray(['You should verify your email to save']);
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