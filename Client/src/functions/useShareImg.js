import {useContext} from 'react';
import {Context} from '../Context.js';
import domtoimage from 'dom-to-image';
import getImgUrl from './getImgUrl.js';
import clickLink from './clickLink.js';

function useShareImg () {
  const {colors, quote, auto, refs} = useContext(Context);
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const quoteRef = refs.refImg;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const {ClipboardItem} = window;
  let link = ``;

  const shareImg = async function checkChosenAndShare () {
    const blob = await domtoimage.toBlob(quoteRef.current);
    switch (shareChosen) {
      case 'Clipboard':
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})]);
        alert('Screenshot took on clipboard'); 
        break;
      case 'Tumblr':
        const imgUrl = await getImgUrl(blob);
        link = `https://www.tumblr.com/widgets/share/tool?posttype=photo&tags=quotes&content=${imgUrl}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`;  
        break;
      case 'Twitter':
        link = `http://twitter.com/intent/tweet?hashtags=quotes&realted=elsirook&text="${quoteText}"%20-%20${author}`;
        break;  
    };
    if (shareChosen != 'Clipboard') {
      clickLink(link);  
    };
  };
  return shareImg;
};

export default useShareImg;