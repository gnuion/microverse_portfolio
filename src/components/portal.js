const Portal = (props) => {
  const element = document.createElement('div');
  element.id = 'portal';

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
