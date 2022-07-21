const Button = (text, iconClass, link) => {
  const element = document.createElement('a');
  element.setAttribute('href', link);
  element.className = 'btn';
  element.innerText = text;

  const icon = document.createElement('i');
  icon.className = iconClass;
  icon.style.paddingLeft = '0.6rem';

  element.appendChild(icon);

  return element;
};

export default Button;
