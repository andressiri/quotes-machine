import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import Message from '../../Message.js';
import AuthorInput from './AuthorInput.js';
import QuoteTextarea from './QuoteTextarea.js';
import SaveCustomQuoteBtn from './SaveCustomQuoteBtn.js';

function CustomQuoteContainer() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;

  return (
    <div className={'routeColumnContainer'}>
      <Message parentToChild={{
        defaultMessage: 'Create your own quote',
        waitMessage: '',
        config: {
          colorNum: colorNumber,
          imgBG: imgBGColor
        }
      }} />
      <form id='customQuoteForm'>
        <QuoteTextarea />
        <AuthorInput />
        <SaveCustomQuoteBtn />
      </form>
    </div>
  );
};

export default CustomQuoteContainer;