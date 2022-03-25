import React from 'react';
import LoginBtn from './LoginBtn.js';
import CreateQuoteBtn from './CreateQuoteBtn.js';
import ShareBtn from './ShareBtn.js';
import SaveBtn from './SaveBtn.js';
import SavedWallBtn from './SavedWallBtn.js';
import SearchBtn from './SearchBtn.js';
import OptionsBtn from './OptionsBtn.js';

function StartingMenu () {
  return (
    <div>
      <h2 className={`shareIt`} >Menu</h2>
      <LoginBtn />
      <CreateQuoteBtn />
      <ShareBtn />
      <SaveBtn />
      <SavedWallBtn />
      <SearchBtn />
      <OptionsBtn />
    </div>    
  );
};

export default StartingMenu;