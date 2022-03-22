import {useContext} from 'react';
import {Context} from './../Context.js';
import useRedirectTo from './useRedirectTo.js';

function useLogout () {
  const {quote, refs} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const redirectTo = useRedirectTo();
    
  const logout = function logoutHandle () {
    const logout = fetch('/users/logout', {method: "DELETE"});
    setSavedQuotesArray([]);
    setMessagesArray([]);
    setLoggedIn(false);
    setVerified(false);
    redirectTo('/box/login');
  };  
  return logout;
};

export default useLogout;