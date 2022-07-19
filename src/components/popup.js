import Portal from './portal.js';
import Image from './image.js';
import Title from './title.js';
import Content from './content.js';
import Buttons from './buttons.js';
import Tags from './tags.js';
import Close from './close.js';

const Popup = (project) => {
  const element = document.createElement('div');
  element.className = 'popup';

  const children = [
    Image({ url: project.imgUrl }),
    Title(project.title),
    Tags(project.tags),
    Content(project.content),
    Buttons(),
    Close(() => {
      element.parentElement.remove();
      window.history.back();
    }),
  ];

  children.forEach((child) => {
    element.appendChild(child);
  });

  return Portal({ children: [element] });
};

export default Popup;
