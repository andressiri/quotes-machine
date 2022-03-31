function clickLink (linkUrl) {
    const link = document.createElement('a');  
    link.href = linkUrl;
    link.target = '_blank';
    link.click();
    link.remove();
};

export default clickLink;