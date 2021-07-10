import React, {useContext} from 'react';
import {Context} from '../Context.js';
import Gallery from './GroupOneComponents/Gallery/Gallery.js';
import GroupOneSharing from './GroupOneComponents/Sharing/GroupOneSharing.js';
import GroupTwo from './GroupTwoComponents/GroupTwo.js';
import GroupThree from './GroupThreeComponents/GroupThree.js';
import GroupFour from './GroupFourComponents/GroupFour.js';

function GroupContainer() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [groupRef, setGroupRef] = groups.gRef;
  let activeGroup = <div />;
  
  switch (groupRef) {
    case 'groupOne':
      activeGroup = <div>
                      <Gallery />
                      <GroupOneSharing /> 
                    </div>; 
      break;
    case 'groupTwo':
      activeGroup = <GroupTwo />;
      break;
    case 'groupThree':
      activeGroup = <GroupThree />;
      break;
    case 'groupFour':
      activeGroup = <GroupFour />;
      break;
  }
  return (
    <div className={`groupContainer BG-color${imgBGColor}`}>
      {activeGroup}
    </div>
  );
};

export default GroupContainer;