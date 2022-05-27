function generateSearchQuoteObj (config) {
    const searchQuoteObj = {
      content: config.content,
      author: config.author,
      custom: false,
      favorite: false,
      colorNum: config.colorNum,
      imgBG: config.imgBG,
      fontF: config.fontF,
      boldF: config.boldF,
      italicF: config.italicF,
      upperF: config.upperF,
      fontS: config.fontS
    };
    return searchQuoteObj;
  };

export default generateSearchQuoteObj;