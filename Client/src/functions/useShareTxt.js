import {useContext} from 'react';
import {Context} from './../Context.js';
import clickLink from './clickLink.js';

function useShareTxt () {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  let link = ``;
  
  const shareTxt = async function checkChosenAndShare (config) {
    if (shareChosen.current === 'Clipboard') {
      await navigator.clipboard.writeText(`"${config.content}" - ${config.author}`);     
      alert(`Copied: "${config.content}" - ${config.author}`);
    } else {
      switch (shareChosen.current) {
        case 'Tumblr':
          link = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${config.author}&content=${config.content}%20&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
          break;
        case 'Twitter':
          link = `http://twitter.com/intent/tweet?hashtags=quotes&realted=elsirook&text="${config.content}"%20-%20${config.author}`;
          break;
        // no default    
       };
      clickLink(link);
    };
  };
  return shareTxt;
};

export default useShareTxt;