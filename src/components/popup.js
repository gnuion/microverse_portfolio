import Portal from './portal.js';
import Image from './image.js';

const elementStyle = {
  backgroundColor: 'blue',
  color: 'red',
  width: '100%',
  height: '100%',
};


const test = document.createElement("p")
test.innerText = "asdasd"



const props = {
  children: [Image({url: "../placeholder.jpg"})]
}

const Popup = () => {
  let element = document.createElement('div');



  for (let property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  if (props) {
    if (props.children) {
      props.children.forEach((child) => {
        element.appendChild(child);
      });
    }
  }

  return Portal({ children: [element] });
};

export default Popup;
