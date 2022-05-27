import {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../useRedirectTo.js';

function useCheckVerified () {
  const {refs} = useContext(Context);
  const [verified, setVerified] = refs.ver;
  const redirectTo = useRedirectTo();
    
  const checkVerified = () => {
    if (verified) {
      redirectTo('/box/logged-in');
    } else {
      redirectTo('/box/email/verification');
    };
  };
  return checkVerified;
};

export default useCheckVerified;