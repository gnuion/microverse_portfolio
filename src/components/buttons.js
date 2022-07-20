import Button from './button.js';

const Buttons = () => {
  const children = [
    Button('See Live', 'youtube'),
    Button('See Source', 'facebook'),
  ];

  const element = document.createElement('div');
  element.className = 'btns';

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
};

export default Buttons;
