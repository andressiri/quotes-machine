import {useContext} from 'react';
import {Context} from './../Context.js';

function useResetInputs () {
  const {forms} = useContext(Context);
  const [nameValue, setNameValue] = forms.name;
  const [emailValue, setEmailValue] = forms.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [password2Value, setPassword2Value] = forms.pass2;
  const [codeValue, setCodeValue] = forms.code;
    
  const resetInputs = function resetAllInputs () {
    setNameValue('');
    setEmailValue('');
    setPasswordValue('');
    setPassword2Value('');
    setCodeValue('');
  };  
  return resetInputs;
};

export default useResetInputs;