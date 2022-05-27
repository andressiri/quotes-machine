import React from 'react';
import ColorBtn from './ColorBtn.js';

function BackgroundColor ({parentToChild}) {
  const {config, index, wall} = parentToChild;

  return (
    <div className={`overflowDiv scrollbar${config.imgBG} scroll${config.colorNum}`}>
      <div className={`editGroup BG-color${config.imgBG} text-color${config.colorNum}`}>
        <h4 className={`text-color${config.colorNum}`}  style={{marginRight: '5px'}}>Back</h4>
        <div>
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 8, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 0, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 1, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 2, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 3, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 4, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 5, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 6, textOrBG: 'imgBG', opposite: 'colorNum'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 7, textOrBG: 'imgBG', opposite: 'colorNum'}} />
        </div>
        <h4 className={`text-color${config.colorNum}`} style={{marginLeft: '5px'}}>Back</h4>
      </div>
    </div>
  );
};
// colors are linked to ../../../styles/colorChange.scss $colors (array of colors)
// 0 = red, 1 = orange, 2 = yellow, 3 = green, 4 = blue, 5 = indigo, 6 = violet, 7 = black and 8 = white

export default BackgroundColor;