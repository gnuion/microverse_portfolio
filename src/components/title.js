const elementStyle = {};

const Title = (text) => {
  const element = document.createElement('h2');
  element.innerText = text;

  for (let property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  return element;
};

export default Title;
