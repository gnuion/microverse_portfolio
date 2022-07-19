const Content = (text) => {
  const element = document.createElement('p');
  element.innerText = text;

  return element;
};

export default Content;
