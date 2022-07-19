import Popup from './components/popup.js';
import projects from '../data.js';

const renderPopup = () => {
  let popup = null;

  for (let project of projects) {
    if ('#' + project.id === window.location.hash) {
      popup = Popup(project);
      break;
    }
  }

  if (popup) {
    document.body.appendChild(popup);
  }
};

window.addEventListener('load', () => {
  renderPopup();
});

window.addEventListener('hashchange', () => {
  renderPopup();
});
