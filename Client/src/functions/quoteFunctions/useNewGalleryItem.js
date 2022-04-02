import {useContext} from 'react';
import {Context} from '../../Context.js';

function useNewGalleryItem () {
  const {gall} = useContext(Context);
  const [gallArray, setGallArray] = gall.gallA;
    
  const newGalleryItem = async function getItemAndPushItToGallery (txt, auth, custom) {
    const item = {text: txt, author: auth, custom: custom};
    const auxArr = gallArray;
    auxArr.push(item);
    if (auxArr.length > 5) {
      auxArr.shift();
    };
    setGallArray(auxArr);
  };  
  return newGalleryItem;
};

export default useNewGalleryItem;