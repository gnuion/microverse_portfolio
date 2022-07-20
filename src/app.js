import Popup from './components/popup.js';
import projects from '../data.js';

const renderPopup = () => {
  for (let i = 0; i < projects.length; i += 1) {
    if (`#${projects[i].id}` === window.location.hash) {
      return document.body.appendChild(Popup(projects[i]));
    }
  }

  return null;
};

window.addEventListener('load', () => {
  renderPopup();
});

window.addEventListener('hashchange', () => {
  renderPopup();
});
