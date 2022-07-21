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
    errSpan.innerText="Email must be all lowercase!"
  } else {
    form.submit();
  }
});

