import React from 'react';
import FontFamilyBtn from './FontFamilyBtn.js';
import FontStyleBtn from './FontStyleBtn.js';
import FontSize from './FontSize.js';

function FontStyle ({parentToChild}) {
  const {config, index, wall} = parentToChild;

  return (
    <div className={`editGroup BG-color${config.imgBG} text-color${config.colorNum}`}>
      <p className={`text-color${config.colorNum}`} style={{marginRight: '5px'}}>Style</p>
      <div>
        <FontFamilyBtn parentToChild={{config: config, index: index, wall: wall, font: 'Arial, Helvetica, sans-serif', id: 'sansSerifBtn'}} />
        <FontFamilyBtn parentToChild={{config: config, index: index, wall: wall, font: 'Garamond, serif', id: 'serifBtn'}} />
        <FontFamilyBtn parentToChild={{config: config, index: index, wall: wall, font: '"Courier New", Courier, monospace', id: 'monospaceBtn'}} />
        <FontFamilyBtn parentToChild={{config: config, index: index, wall: wall, font: '"Brush Script MT", cursive', id: 'cursiveBtn'}} />
        <FontFamilyBtn parentToChild={{config: config, index: index, wall: wall, font: 'Copperplate, Papyrus, fantasy', id: 'fantasyBtn'}} />
        <FontStyleBtn parentToChild={{config: config, index: index, wall: wall, style: 'boldF', styleValue: 'bold', notStyled: 'normal', btnText: 'B'}} />
        <FontStyleBtn parentToChild={{config: config, index: index, wall: wall, style: 'italicF', styleValue: 'italic', notStyled: 'normal', btnText: 'I'}} />
        <FontStyleBtn parentToChild={{config: config, index: index, wall: wall, style: 'upperF', styleValue: 'uppercase', notStyled: 'none', btnText: 'UP'}} />
        <FontSize parentToChild={parentToChild} />
      </div>
      <p className={`text-color${config.colorNum}`} style={{marginLeft: '5px'}}>Style</p>
    </div>
  );
};

export default FontStyle;