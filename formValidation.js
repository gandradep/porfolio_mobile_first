let email = document.getElementById('emailAddress');
let form = document.getElementById('contactForm');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let inputEmail = email.value;
    let inputEmailLow = inputEmail.toLowerCase();
    if(inputEmail === inputEmailLow) {
        // form.submit();
        console.log('Email was sent');
    } else {
        console.log('Please do not use caps');
    }
});