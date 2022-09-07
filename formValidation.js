const email = document.getElementById('emailAddress');
const form = document.getElementById('contactForm');
const emailSpan = document.getElementById('emailSpan');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputEmail = email.value;
  const inputEmailLow = inputEmail.toLowerCase();
  if (inputEmail === inputEmailLow) {
    form.submit();
  } else {
    emailSpan.classList.remove('displayNone');
    email.classList.add('errorBckG');
  }
});

email.addEventListener('focus', () => {
  emailSpan.classList.add('displayNone');
  email.classList.remove('errorBckG');
});
