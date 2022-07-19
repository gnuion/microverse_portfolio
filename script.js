const nav = document.getElementById('nav');
const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnIcon = toggleBtn.querySelector('i');
const navLinks = Array.from(nav.querySelectorAll('li'));

let sectionsAndNavLinks = [];

navLinks.forEach((navLink) => {
  let sectionId = navLink.firstChild.getAttribute('href');
  let section = document.querySelector(sectionId);
  sectionsAndNavLinks.push([section, navLink]);
});

window.addEventListener('scroll', () => {
  sectionsAndNavLinks.forEach((sectionAndNavlink) => {
    let section = sectionAndNavlink[0];
    let navLink = sectionAndNavlink[1];
    if (
      window.scrollY + 50 > section.offsetTop &&
      window.scrollY + 50 < section.offsetTop + section.offsetHeight
    ) {
      navLink.className = 'active';
    } else {
      navLink.className = '';
    }
    console.log(section, 'offset top', section.offsetTop);
  });
});

const toggleMenu = () => {
  toggleBtnIcon.classList.toggle('fa-bars');
  toggleBtnIcon.classList.toggle('fa-x');
  nav.classList.toggle('open');
};

toggleBtn.addEventListener('click', () => toggleMenu());

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      toggleMenu();
    }
  });
}
