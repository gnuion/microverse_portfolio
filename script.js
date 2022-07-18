const nav = document.getElementById('nav');
const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  toggleBtnIcon.classList.toggle('fa-bars');
  toggleBtnIcon.classList.toggle('fa-x');
  nav.classList.toggle('open');
});
