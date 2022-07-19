import Portal from './portal.js';
import Image from './image.js';
import Title from './title.js';
import Content from './content.js';
import Button from './button.js';
import Tags from './tags.js';
import Close from './close.js';

// import Tags from './tags.js';

const elementStyle = {
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '1rem',
  width: '100%',
  textAlign: 'left',
  padding: '2rem',
};

const Popup = (project) => {
  const element = document.createElement('div');

  const children = [
    Image({ url: project.imgUrl }),
    Tags(project.tags),
    Title(project.title),
    Content(project.content),
    Button('See Live'),
    Button('See Source'),
    Close(() => {
      element.parentElement.remove();
      history.back();
    }),
  ];

  for (const property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  children.forEach((child) => {
    element.appendChild(child);
  });

  return Portal({ children: [element] });
};

export default Popup;
