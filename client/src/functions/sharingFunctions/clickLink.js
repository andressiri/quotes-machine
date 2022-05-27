const clickLink = (linkUrl) => {
  const link = document.createElement('a');
  link.href = linkUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer nofollow';
  link.click();
  link.remove();
};

export default clickLink;