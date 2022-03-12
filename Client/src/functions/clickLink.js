function clickLink (linkUrl) {
    const link = document.createElement('a');  
    link.href = linkUrl;
    link.target = '_blank';
    link.click();
};

export default clickLink;