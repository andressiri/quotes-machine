import React from 'react';
import Gallery from './gallery/Gallery.js';
import StartingMenu from './startingMenu/StartingMenu.js';

function BoxStartingContainer({parentToChild}) {
  return (
    <div>
      <Gallery />
      <StartingMenu parentToChild={parentToChild} />
    </div>
  );
};

export default BoxStartingContainer;