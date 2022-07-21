const form = document.querySelector('form');

const { email, button } = form.elements;

const errSpan = document.createElement('p');
errSpan.style.textAlign = 'left';
errSpan.style.color = 'red';
errSpan.style.fontSize = '1rem';

button.insertAdjacentElement('beforebegin', errSpan);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (email.value !== email.value.toLocaleLowerCase()) {
    email.setCustomValidity('Email should be all lowercase!');
    errSpan.innerText = 'Email should be all lowercase!';
  } else {
    email.setCustomValidity('');
    errSpan.innerText = '';
    form.submit();
  }
});