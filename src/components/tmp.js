// function loadJS(url) {
//   let script = document.createElement('script');
//   script.src = url;
//   document.body.appendChild(script);
// }

const portal = document.createElement('div');
portal.innerHTML="<p>Hello!</p>"

import Portal from './portal.js'



Portal({children: [portal]})









// let tags = document.createElement('ul');
// tags.className = 'tags';
// popup.appendChild(tags);

// const seeLiveBtn = document.createElement('a');
// seeLiveBtn.textContent = 'See Live';
// seeLiveBtn.className = 'btn';
// popup.append(seeLiveBtn);

// const seeSourceBtn = document.createElement('a');
// seeSourceBtn.textContent = 'See Source';
// seeSourceBtn.className = 'btn';
// popup.append(seeSourceBtn);

// popup.addEventListener('click', () => {
//   history.go(-1);
// });

// const renderPopup = () => {

//   projects.forEach((project) => {
//     for (id in project) {
//       if ('#' + project[id] === window.location.hash) {
//         img.setAttribute('src', project.imgUrl);
//         title.textContent = project.title;
//         content.textContent = project.content;

//         while (tags.firstChild) {
//           tags.removeChild(tags.firstChild);
//         }

//         project.tags.forEach((tagContent) => {
//           let tag = document.createElement('li');
//           tag.textContent = tagContent;
//           tags.appendChild(tag);
//         });


//       }
//     }
//   });
// };

// window.addEventListener('load', () => {
//   renderPopup();
// });

// window.addEventListener('hashchange', () => {
//   renderPopup();
// });
