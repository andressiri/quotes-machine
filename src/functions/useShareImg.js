import {useContext} from 'react';
import {Context} from '../Context.js';
import domtoimage from 'dom-to-image';
import getImgUrl from './getImgUrl.js';
import clickLink from './clickLink.js';
import './../styles/RandomColor.scss';

function useShareImg () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const quoteRef = refs.refImg;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [imgTxtColor, setImgTxtColor] = colors.imgTxt;
  const {ClipboardItem} = window;
  let link = ``;
  let txtColor = imgTxtColor;
  let bgColor = imgBGColor;   // 'rgb(220, 220, 220)'; //bonded to $boxBG from _variables.scss 
       //funcionó la prueba, ahora hay que implementarlo creando una función para generar el blob
       
  const shareImg = async function checkChosenAndShare () {
    console.log(txtColor);
    const blob = await domtoimage.toBlob(quoteRef.current, {style: {backgroundColor: bgColor, textDecoration: txtColor}})
    switch (shareChosen) {
      case 'Clipboard':
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})]);
        alert('Screenshot took on clipboard'); 
        break;
      case 'Tumblr':
        const imgUrl = await getImgUrl(blob);
        console.log(imgUrl);
        link = `https://www.tumblr.com/widgets/share/tool?posttype=photo&tags=quotes&content=${imgUrl}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`;  
        break;
      case 'Twitter':
        link = `http://twitter.com/intent/tweet?hashtags=quotes&realted=elsirook&text="${quoteText}"%20-%20${author}`;
        break;  
    }
    if (shareChosen != 'Clipboard') {
      clickLink(link);  
    };
  };
  return shareImg;
}

export default useShareImg;