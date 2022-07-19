const nav = document.getElementById('nav');
const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnIcon = toggleBtn.querySelector('i');
const navLinks = Array.from(nav.querySelectorAll('li'));

const sectionsAndNavLinks = [];

navLinks.forEach((navLink) => {
  const sectionId = navLink.firstChild.getAttribute('href');
  const section = document.querySelector(sectionId);
  sectionsAndNavLinks.push([section, navLink]);
});

window.addEventListener('scroll', () => {
  sectionsAndNavLinks.forEach((sectionAndNavlink) => {
    const section = sectionAndNavlink[0];
    const navLink = sectionAndNavlink[1];
    if (
      section.offsetTop < window.scrollY + 50 &&
      window.scrollY + 50 < section.offsetTop + section.offsetHeight
    ) {
      navLink.className = 'active';
    } else {
      navLink.className = '';
    }
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
