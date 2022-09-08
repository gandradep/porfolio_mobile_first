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

var formData = {fullName: '', email: '', comments: ''};

function updateStorageData () {
  let formDataString = JSON.stringify(formData);
  localStorage.setItem('formStored', formDataString);
}

let cookieData = localStorage.getItem('formStored');
let object = JSON.parse(cookieData);

fullName.value = object.fullName;
email.value = object.email;
comments.value = object.comments;

fullName.addEventListener('focusout', () => {
  formData.fullName = fullName.value;
  updateStorageData();
});

email.addEventListener('focusout', () => {
  formData.email = email.value;
  updateStorageData();
});

comments.addEventListener('focusout', () => {
  formData.comments = comments.value;
  updateStorageData();
});

