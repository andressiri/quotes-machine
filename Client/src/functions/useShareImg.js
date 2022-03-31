import {useContext} from 'react';
import {Context} from './../Context.js';
import domtoimage from 'dom-to-image';
import getImgUrl from './getImgUrl.js';
import clickLink from './clickLink.js';

function useShareImg () {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const {ClipboardItem} = window;
  let link = ``;

  const shareImg = async function checkChosenAndShare (referenceDiv, config) {
    const blob = await domtoimage.toBlob(referenceDiv.current);
    const imgurData = await getImgUrl(blob);
    if (imgurData.data.error) {
      console.log(imgurData.data.error);
      const message = 'There was an error getting the image, try again';
      return message;
    };
    const imgUrl = imgurData.data.link; 
    switch (shareChosen.current) {
      case 'Clipboard':
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})]);
        alert('Screenshot took on Clipboard'); 
        break;
      case 'Tumblr':
        link = `https://www.tumblr.com/widgets/share/tool?posttype=photo&tags=quotes&content=${imgUrl}&caption="${config.content}"%20-%20${config.author}%20&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`;  
        break;
      case 'Twitter':
        link = `http://twitter.com/intent/tweet?url=${imgUrl}%20&hashtags=quotes&text="${config.content}"%20-%20${config.author}`;
        break;
      // no default    
    };
    if (shareChosen.current !== 'Clipboard') clickLink(link);    
    return null;
  };
  return shareImg;
};

export default useShareImg;