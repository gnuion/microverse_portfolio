const elementStyle = {
  position: 'absolute',
  top: '3.5rem',
  right: '3.5rem',
  fontSize: '1.5rem',
  color: 'white',
};

const Close = (closeFunction) => {
  const element = document.createElement('div');
  const xIcon = document.createElement('i');
  xIcon.className = 'fa-solid fa-x';

  element.appendChild(xIcon);

  for (let property in elementStyle) {
    element.style[property] = elementStyle[property];
  }
  

  element.addEventListener('click', () => {
    closeFunction()
  });

  return element;
};

export default Close;
