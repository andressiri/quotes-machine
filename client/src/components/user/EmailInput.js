import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function EmailInput ({parentToChild}) {
  const {forms} = useContext(Context);
  const [emailValue, setEmailValue] = forms.email;
  const {config} = parentToChild;

  return (
    <input
      type='email'
      placeholder='Email...'
      className={`formBtn inputs BG-color${config.imgBG} text-color${config.colorNum}`}
      onChange={(event) => setEmailValue(event.target.value)}
    />
  );
};

export default EmailInput;