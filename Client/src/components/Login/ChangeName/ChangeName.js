import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import NameInput from '../NameInput.js';
import ChangeNameBtn from './ChangeNameBtn.js';

function ChangeName() {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const auxRef = refs.aux;
  const redirectTo = useRedirectTo();

  const handleGoBack = () => {
    auxRef.current = '';
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/loggedIn');
  };

  return (
    <div>
      <p className={`shareIt`} >Create your new name</p>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <form id='changeNameForm'>
        <NameInput />
        <ChangeNameBtn />
      </form>
      <h2 className={`shareIt`} onClick={handleGoBack}>Go back</h2>
    </div>
  );
};

export default ChangeName;