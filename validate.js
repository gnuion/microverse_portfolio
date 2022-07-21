const form = document.querySelector('form');

const email = form.elements['email'];
email.style.backgroundColor = 'red';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (email.value !== email.value.toLocaleLowerCase()) {
    email.setCustomValidity('Email should be all lowercase!');
    email.reportValidity();
  } else {
    form.submit()
  }
});

email.addEventListener('input', (event) => {
  if (email.value !== email.value.toLocaleLowerCase()) {
    email.setCustomValidity('Email should be all lowercase!');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});
