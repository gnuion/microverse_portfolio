const Image = ({ url }) => {
  const element = document.createElement('img');
  element.src = url;

  return element;
};

export default Image;
