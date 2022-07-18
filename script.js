const nav = document.getElementById('nav');
const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnIcon = toggleBtn.querySelector('i');
const navLinks = Array.from(nav.querySelectorAll('li'));

toggleBtn.addEventListener('click', () => {
  toggleBtnIcon.classList.toggle('fa-bars');
  toggleBtnIcon.classList.toggle('fa-x');
  nav.classList.toggle('open');
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
