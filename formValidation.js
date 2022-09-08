const fullName = document.getElementById('fullName');
const email = document.getElementById('emailAddress');
const comments = document.getElementById('comments');
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

/* preserving data to localStorage */
fullName.addEventListener('focusout', (e) => {
  localStorage.setItem('fullname', fullName.value);
});
