import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import Message from '../../Message.js';
import AuthorInput from './AuthorInput.js';
import QuoteTextarea from './QuoteTextarea.js';
import SaveCustomQuoteBtn from './SaveCustomQuoteBtn.js';

function CustomQuoteContainer() {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;

  return (
    <div className={'routeColumnContainer'}>
      <Message parentToChild={{defaultMessage: 'Create your own quote', waitMessage: ''}} />
      <form id='customQuoteForm'>
        <QuoteTextarea />
        <AuthorInput />
        <SaveCustomQuoteBtn />
      </form>
    </div>
  );
};

export default CustomQuoteContainer;