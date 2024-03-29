import React from 'react';
import LoginBtn from './LoginBtn.js';
import CustomQuoteBtn from './CustomQuoteBtn.js';
import ShareBtn from './ShareBtn.js';
import SaveBtn from './SaveBtn.js';
import SavedWallBtn from './SavedWallBtn.js';
import SearchBtn from './SearchBtn.js';
import OptionsBtn from './OptionsBtn.js';

function StartingMenu ({parentToChild}) {
  return (
    <div>
      <h2 className={`shareIt`} >Menu</h2>
      <div className={'flexDiv'}>
        <div>
          <LoginBtn />
          <CustomQuoteBtn />
          <ShareBtn />
          <SaveBtn />
        </div>
        <div>
          <SavedWallBtn />
          <SearchBtn />
          <OptionsBtn parentToChild={parentToChild} />
        </div>
      </div>
    </div>
  );
};

export default StartingMenu;