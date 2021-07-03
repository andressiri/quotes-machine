import {useContext} from 'react';
import {Context} from '../Context.js';
import './../styles/RandomColor.scss';
import clickLink from './clickLink.js';

function useShareTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [shareChosen, setShareChosen] = refs.sChosen;
  let link = ``;
  
  const shareTxt = async function checkChosenAndShare () {
    if (shareChosen == 'Clipboard') {
      await navigator.clipboard.writeText(`"${quoteText}" - ${author}`);     
      alert(`Copied: "${quoteText}" - ${author}`);
    } else {
      switch (shareChosen) {
        case 'Tumblr':
          link = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quoteText}%20&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
          break;
        case 'Twitter':
          link = `http://twitter.com/intent/tweet?hashtags=quotes&realted=elsirook&text="${quoteText}"%20-%20${author}`;
          break;  
       }
      clickLink(link);
    }
  };
  return shareTxt;
}

export default useShareTxt;