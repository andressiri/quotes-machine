import React from 'react';
import EditImgBtn from './EditImgBtn';
import OkImgBtn from './OkImgBtn';

function EditOrOkSet ({parentToChild}) {
  return (
    <div>
      <EditImgBtn parentToChild={parentToChild} />
      <OkImgBtn />
    </div>    
  );
};

export default EditOrOkSet;