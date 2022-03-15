import {useContext} from 'react';
import {Context} from './../Context.js';
import { useNavigate } from 'react-router-dom';

function useRedirectTo () {
  const {refs} = useContext(Context);
  const [currentPath, setCurrentPath] = refs.path;
  const navigate = useNavigate();
    
  const redirectTo = function setCurrentPathAndNavigate (path) {
    setCurrentPath(path);
    navigate(path);
  };  
  return redirectTo;
};

export default useRedirectTo;