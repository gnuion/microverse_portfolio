const Button = (text) => {
  const element = document.createElement('a');
  element.className = 'btn';
  element.innerText = text;

  return element;
};

export default Button;
