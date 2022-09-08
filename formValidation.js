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

let storedName = localStorage.getItem('fullname');
let storedEmail = localStorage.getItem('email');
let storedComment = localStorage.getItem('comments');
fullName.value = storedName;
email.value = storedEmail;
comments.value = storedComment;

fullName.addEventListener('focusout', () => {
  localStorage.setItem('fullname', fullName.value);
});

email.addEventListener('focusout', () => {
  localStorage.setItem('email', email.value);
});

comments.addEventListener('focusout', () => {
  localStorage.setItem('comments', comments.value);
});

