import {useContext} from 'react';
import {Context} from '../../Context.js';

function useGenerateSearchArray () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;
    
  const generateSearchArray = (searchResults) => {
    const searchResultsArray = searchResults.map((quote) => {
      const objectWithConfig = {
        _id: quote._id,
        content: quote.content,
        author: quote.author,
        colorNum: colorNumber,
        imgBG: imgBGColor,
        fontF: fontFam,
        boldF: boldFont,
        italicF: italicFont,
        upperF: upperFont,
        fontS: fSize
      };
      if (quote.byQuote) objectWithConfig['byQuote'] = true;
      if (quote.byAuthor) objectWithConfig['byAuthor'] = true;
      return objectWithConfig;
    });
    return searchResultsArray;
  };
  return generateSearchArray;
};

export default useGenerateSearchArray;