import {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../useRedirectTo.js';
import useSetInitialOptions from '../DOMFunctions/useSetInitialOptions.js';

function useLogout () {
  const {quote, refs} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const setInitialOptions = useSetInitialOptions();
  const redirectTo = useRedirectTo();
    
  const logout = () => {
    const logout = fetch('/api/users/logout', {method: 'DELETE'});
    savedQuotesArray.current = ['No quotes saved to show'];
    savedQuotesBackup.current = ['No quotes saved to show'];
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