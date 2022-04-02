import React from 'react';
import Gallery from './Gallery/Gallery.js';
import StartingMenu from './StartingMenu/StartingMenu.js';

function BoxStartingContainer({parentToChild}) {
  return (
    <div>
      <Gallery />
      <StartingMenu parentToChild={parentToChild} />
    </div>
  );
};

export default BoxStartingContainer;