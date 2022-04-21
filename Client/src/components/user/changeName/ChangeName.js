import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import Message from '../../Message.js';
import NameInput from '../NameInput.js';
import ChangeNameBtn from './ChangeNameBtn.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function ChangeName() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const auxRef = refs.aux;
  const redirectTo = useRedirectTo();

  const handleGoBack = () => {
    auxRef.current = '';
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/logged-in');
  };

  return (
    <div className={'routeColumnContainer'}>
      <Message parentToChild={{
        defaultMessage: 'Create your new name',
        waitMessage: '',
        config: {
          colorNum: colorNumber,
          imgBG: imgBGColor
        }
      }} />
      <form id='changeNameForm'>
        <NameInput />
        <ChangeNameBtn />
      </form>
      <h3 className={'pointer containerText'} onClick={handleGoBack}>Go back</h3>
    </div>
  );
};

export default ChangeName;