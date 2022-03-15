import {useContext} from 'react';
import {Context} from './../Context.js';
import useRedirectTo from './useRedirectTo.js';

function useLogout () {
  const {refs} = useContext(Context);
  const [loggedIn, setLoggedIn] = refs.logged;
  const redirectTo = useRedirectTo();
    
  const logout = function logoutHandle () {
    setMessagesArray([]);
    const logout = fetch('/users/logout', {method: "DELETE"});
    setLoggedIn(false);
    redirectTo('/login');
  };  
  return logout;
};

export default useLogout;