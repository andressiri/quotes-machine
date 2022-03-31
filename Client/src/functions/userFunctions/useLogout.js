import {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../useRedirectTo.js';
import useSetInitialOptions from '../DOMFunctions/useSetInitialOptions.js';

function useLogout () {
  const {quote, refs} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const setInitialOptions = useSetInitialOptions();
  const redirectTo = useRedirectTo();
    
  const logout = function logoutHandle () {
    const logout = fetch('/users/logout', {method: "DELETE"});
    setSavedQuotesArray(['Empty Array']);
    setSavedQuotesBackup(['Empty Array']);
    if (loggedIn) setInitialOptions();
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');         
    }, 250);
    setLoggedIn(false);
    setVerified(false);
    redirectTo('/box/login');
  };  
  return logout;
};

export default useLogout;