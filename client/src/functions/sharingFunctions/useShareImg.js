import {useContext} from 'react';
import {Context} from '../../Context.js';
import domtoimage from 'dom-to-image';
import getImgUrl from './getImgUrl.js';
import clickLink from './clickLink.js';

function useShareImg () {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const shareChosen = refs.sChosen;
  const emailReference = refs.email;
  const {ClipboardItem} = window;
  let link = '';

  const shareImg = async (referenceDiv, config) => {
    const blob = await domtoimage.toBlob(referenceDiv.current);
    const imgurData = await getImgUrl(blob);
    if (imgurData.data.error) {
      console.log(imgurData.data.error);
      if (shareChosen.current === 'Email') emailReference.current = '';
      const message = 'There was an error getting the image, try again';
      return message;
    };
    const imgUrl = imgurData.data.link;
    const encodedUrl = encodeURIComponent(imgUrl);
    switch (shareChosen.current) {
      case 'Clipboard':
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})]);
        break;
      case 'Tumblr':
        link = `https://www.tumblr.com/widgets/share/tool?posttype=photo&tags=quotes&content=${imgUrl}&caption="${config.content}"%20-%20${config.author}%20&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`;
        clickLink(link);
        break;
      case 'Twitter':
        link = `http://twitter.com/intent/tweet?url=${imgUrl}%20&hashtags=quotes&text="${config.content}"%20-%20${config.author}`;
        clickLink(link);
        break;
      case 'Facebook':
        link = `https://www.facebook.com/sharer.php?u=${encodedUrl}`;
        clickLink(link);
        break;
      case 'Email':
        setMessage('Sending email...')
        const response = await fetch('/api/share/email', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({
            content: config.content,
            author: config.author,
            email: emailReference.current,
            image: imgUrl
          }),
        })
        emailReference.current = '';
        if (response.status !== 201) {
          const json = await response.json();
          const message = json.message;
          return message;
        };
        break;
      // no default
    };
    return `Quote image has been shared on ${shareChosen.current}`;
  };
  return shareImg;
};

export default useShareImg;