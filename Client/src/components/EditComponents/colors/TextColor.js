import React from 'react';
import ColorBtn from './ColorBtn.js';

function TextColor ({parentToChild}) {
  const {config, index, wall} = parentToChild;
  
  return (
    <div className={`overflowDiv scrollbar${config.imgBG} scroll${config.colorNum}`}>
      <div className={`editGroup reSized BG-color${config.colorNum} text-color${config.imgBG}`}>
        <h4 className={`text-color${config.imgBG}`} style={{marginRight: '10px'}}>Text</h4>
        <div>
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 8, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 0, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 1, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 2, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 3, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 4, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 5, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 6, textOrBG: 'colorNum', opposite: 'imgBG'}} />
          <ColorBtn parentToChild={{config: config, index: index, wall: wall, numOfColor: 7, textOrBG: 'colorNum', opposite: 'imgBG'}} />
        </div>
        <h4 className={`text-color${config.imgBG}`} style={{marginLeft: '10px'}}>Text</h4>
      </div>
    </div>
  );
};
// colors are linked to ../../../styles/colorChange.scss $colors (array of colors)
// 0 = red, 1 = orange, 2 = yellow, 3 = green, 4 = blue, 5 = indigo, 6 = violet, 7 = black and 8 = white

export default TextColor;