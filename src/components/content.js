const elementStyle = {};

const Content = (text) => {
  const element = document.createElement('p');
  element.innerText = text;

  for (const property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  return element;
};

export default Content;
