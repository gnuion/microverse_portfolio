import Button from './button.js';

const Buttons = () => {
  const children = [Button('See Live'), Button('See Source')];

  const element = document.createElement('div');
  element.className = 'btns';

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
};

export default Buttons;
