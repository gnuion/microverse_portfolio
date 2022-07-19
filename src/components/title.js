const elementStyle = {};

const Title = (text) => {
  const element = document.createElement('h2');
  element.className = 'title';
  element.innerText = text;

  for (const property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  return element;
};

export default Title;
