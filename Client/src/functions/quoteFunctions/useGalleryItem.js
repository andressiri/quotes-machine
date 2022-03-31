import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGalleryItem () {
  const {gall} = useContext(Context);
  const [gallArray, setGallArray] = gall.gallA;
    
  const galleryItem = async function getItemAndPushItToGallery (txt, auth) {
    const item = {text: txt, author: auth};
    const auxArr = gallArray;
    auxArr.push(item);
    if (auxArr.length > 5) {
      auxArr.shift();
    };
    setGallArray(auxArr);
  };  
  return galleryItem;
};

export default useGalleryItem;