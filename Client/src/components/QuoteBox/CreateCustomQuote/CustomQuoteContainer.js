import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import AuthorInput from './AuthorInput.js';
import QuoteTextarea from './QuoteTextarea.js';
import SaveCustomQuoteBtn from './SaveCustomQuoteBtn.js';

function CustomQuoteContainer() {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;

  return (
    <div>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <form id='customQuoteForm'>
        <QuoteTextarea />
        <AuthorInput />
        <SaveCustomQuoteBtn />
      </form>
    </div>
  );
};

export default CustomQuoteContainer;