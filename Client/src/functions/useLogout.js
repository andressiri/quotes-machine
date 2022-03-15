import {useContext} from 'react';
import {Context} from './../Context.js';
import useRedirectTo from './useRedirectTo.js';

function useLogout () {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const redirectTo = useRedirectTo();
    
  const logout = function logoutHandle () {
    setMessagesArray([]);
    const logout = fetch('/users/logout', {method: "DELETE"});
    setLoggedIn(false);
    setVerified(false);
    redirectTo('/login');
  };  
  return logout;
};

export default useLogout;