const Button = (text, platform) => {
  const element = document.createElement('a');
  element.className = 'btn';
  element.innerText = text;

  const icon = document.createElement('i');
  icon.className = `fa-brands fa-${platform}`;
  icon.style.paddingLeft = '0.6rem';

  element.appendChild(icon);

  return element;
};

export default Button;
