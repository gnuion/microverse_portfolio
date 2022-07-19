const elementStyle = {
  padding: '2rem',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 99,
  top: 0,
  left: 0,
  overflowY: 'scroll',
  backgroundColor: 'rgba(100, 100, 100, 0.5)',
};

const Portal = (props) => {
  const element = document.createElement('div');
  element.id = 'portal';

  for (const property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  if (props) {
    if (props.children) {
      props.children.forEach((child) => {
        element.appendChild(child);
      });
    }
  }

  return element;
};

export default Portal;
