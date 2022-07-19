const Tags = (tags) => {
  const element = document.createElement('ul');
  element.className = 'tags';

  tags.forEach((tagContent) => {
    const tag = document.createElement('li');
    tag.textContent = tagContent;
    element.appendChild(tag);
  });

  return element;
};

export default Tags;
