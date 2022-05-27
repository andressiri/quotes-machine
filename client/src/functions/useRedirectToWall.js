import {useContext} from 'react';
import {Context} from '../Context.js';
import {useNavigate} from 'react-router-dom';
import useResetInputs from './useResetInputs.js';

function useRedirectToWall () {
  const {quote, fade, refs} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const [fadeWall, setFadeWall] = fade.fadW;
  const [currentPath, setCurrentPath] = refs.path;
  const resetInputs = useResetInputs();
  const navigate = useNavigate();

  const redirectToWall = (path) => {
    let delay = 250;
    let auxString = 'Out';
    setFadeWall(auxString);
    resetInputs();
    setTimeout(() => {
      setCurrentPath(path);
      navigate(path);
      setFadeWall('In');
    }, delay);
  };
  return redirectToWall;
};

export default useRedirectToWall;