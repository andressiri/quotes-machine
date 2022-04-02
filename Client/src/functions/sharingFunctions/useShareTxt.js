import {useContext} from 'react';
import {Context} from '../../Context.js';
import clickLink from './clickLink.js';

function useShareTxt () {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const emailReference = refs.email;
  let link = '';
  
  const shareTxt = async (config) => {
    switch (shareChosen.current) {
      case 'Clipboard':
        await navigator.clipboard.writeText(`"${config.content}" - ${config.author}`);
        alert(`Copied: "${config.content}" - ${config.author}`);
        break;
      case 'Tumblr':
        link = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${config.author}&content=${config.content}%20&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
        clickLink(link);
        break;
      case 'Twitter':
        link = `http://twitter.com/intent/tweet?hashtags=quotes&realted=elsirook&text="${config.content}"%20-%20${config.author}`;
        clickLink(link);
        break;
      case 'Facebook':
        link = `https://www.facebook.com/sharer.php?u=${window.location.href}&quote="${config.content}"%20-%20${config.author}`;
        clickLink(link);
        break;
      case 'Email':
        await fetch('/shareOnEmail', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({
            content: config.content,
            author: config.author,
            email: emailReference.current
          }),
        })
          .catch(err => console.log(err));
        emailReference.current = '';
        break;
      // no default
    };
  };
  return shareTxt;
};

export default useShareTxt;