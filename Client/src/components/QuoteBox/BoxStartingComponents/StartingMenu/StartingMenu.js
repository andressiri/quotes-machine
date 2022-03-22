import React from 'react';
import ShareBtn from './ShareBtn.js';
import SaveBtn from './SaveBtn.js';
import SavedWallBtn from './SavedWallBtn.js';
import LoginBtn from './LoginBtn.js';

function StartingMenu () {
  return (
    <div>
      <h2 className={`shareIt`} >Share it!</h2>
      <ShareBtn />
      <SaveBtn />
      <LoginBtn />
      <SavedWallBtn />
    </div>    
  );
};

export default StartingMenu;