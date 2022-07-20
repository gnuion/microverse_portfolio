import Button from './button.js';

const Buttons = () => {
  const children = [
    Button('See Live', 'fa-solid fa-rss'),
    Button('See Source', 'fa-brands fa-github'),
  ];

  const element = document.createElement('div');
  element.className = 'btns';

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
};

export default Buttons;
