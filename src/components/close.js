const Close = (closeFunction) => {
  const element = document.createElement('div');
  element.className = 'close';
  const xIcon = document.createElement('i');
  xIcon.className = 'fa-solid fa-close';
  element.appendChild(xIcon);

  element.addEventListener('click', () => {
    closeFunction();
  });

  return element;
};

export default Close;
