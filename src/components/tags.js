// while (tags.firstChild) {
//   tags.removeChild(tags.firstChild);
// }

// project.tags.forEach((tagContent) => {
//   let tag = document.createElement('li');
//   tag.textContent = tagContent;
//   tags.appendChild(tag);
// });

const Tags = (tags) => {
  const element = document.createElement('ul');
  element.className = 'tags';

  tags.forEach((tagContent) => {
    let tag = document.createElement('li');
    tag.textContent = tagContent;
    element.appendChild(tag);
  });

  return element;
};

export default Tags;
