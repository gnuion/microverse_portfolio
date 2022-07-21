const Title = (text) => {
  const element = document.createElement('h2');
  element.className = 'title';
  element.innerText = text;

  return element;
};

export default Title;
