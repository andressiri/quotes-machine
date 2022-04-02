import {useContext} from 'react';
import {Context} from './../Context.js';
import {useNavigate} from 'react-router-dom';
import useResetInputs from './useResetInputs.js';

function useRedirectTo () {
  const {fade, refs} = useContext(Context);
  const [fadeMenu, setFadeMenu] = fade.fadM;
  const [currentPath, setCurrentPath] = refs.path;
  const resetInputs = useResetInputs();
  const navigate = useNavigate();
    
  const redirectTo = (path) => {
    setFadeMenu('Out');
    resetInputs();
    setTimeout(() => {
      setCurrentPath(path);
      navigate(path);
      setFadeMenu('In');
    }, 250);
  };
  return redirectTo;
};

export default useRedirectTo;