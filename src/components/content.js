const Content = (text) => {
  const element = document.createElement('p');
  element.className = 'content';
  element.innerText = text;

  return element;
};

export default Content;
