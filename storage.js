const form = document.querySelector('form');

const { fullname, email, content } = form.elements;

let formStore = { fullname: '', email: '', content: '' };

if (!localStorage.getItem('formStore')) {
  localStorage.setItem('formStore', JSON.stringify(formStore));
} else {
  formStore = JSON.parse(localStorage.getItem('formStore'));
}

[email, content].forEach((formInput) => {
  formInput.addEventListener('input', () => {
    formStore[formInput.name] = formInput.value;
    localStorage.setItem('formStore', JSON.stringify(formStore));
  });
});

window.addEventListener('load', () => {
  [email, content].forEach((formInput) => {
    console.log(formInput.name, formStore[formInput.name]);
    formInput.value = formStore[formInput.name];
  });
});
