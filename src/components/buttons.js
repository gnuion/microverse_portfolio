import Button from './button.js';

const Buttons = () => {
  const children = [
    Button(
      'See Live',
      'fa-solid fa-arrow-up-right-from-square',
      'https://www.example.com'
    ),
    Button('See Source', 'fa-brands fa-github', 'https://www.github.com'),
  ];

  const element = document.createElement('div');
  element.className = 'btns';

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
};

export default Buttons;
