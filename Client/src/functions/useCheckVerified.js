import {useContext} from 'react';
import {Context} from './../Context.js';
import useRedirectTo from './useRedirectTo.js';

function useCheckVerified () {
  const {refs} = useContext(Context);
  const [verified, setVerified] = refs.ver;
  const redirectTo = useRedirectTo();
    
  const checkVerified = function checkAndRedirect () {
    if (verified) {
      redirectTo('/box/loggedIn');
    } else {
      redirectTo('/box/verifyEmail');
    };
  };  
  return checkVerified;
};

export default useCheckVerified;