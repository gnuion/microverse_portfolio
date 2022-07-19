const elementStyle = {};

const Button = (text) => {
  const element = document.createElement('a');
  element.className = 'btn';
  element.innerText = text;

  for (const property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  return element;
};

export default Button;
