import {useContext} from 'react';
import {Context} from './../Context.js';
import {useNavigate} from 'react-router-dom';
import useResetInputs from './useResetInputs.js';

function useRedirectTo () {
  const {refs} = useContext(Context);
  const [currentPath, setCurrentPath] = refs.path;
  const resetInputs = useResetInputs();
  const navigate = useNavigate();
    
  const redirectTo = function setCurrentPathAndNavigate (path) {
    resetInputs();
    setCurrentPath(path);
    navigate(path);
  };  
  return redirectTo;
};

export default useRedirectTo;