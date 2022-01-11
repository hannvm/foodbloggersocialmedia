// Form Validation Sign Up
const form = document.getElementById('su-form');
const username = document.getElementById('su-username');
const email = document.getElementById('su-email');
const password = document.getElementById('su-password');
const passwordVer = document.getElementById('su-password-ver');
const buttons = document.querySelector('.buttons');

const passOneValue = password.value.trim()
const passTwoValue = passwordVer.value.trim()




//Event to validate form. Calls functions which check individual values in each
buttons.addEventListener('click', (e) => {
    e.preventDefault();
    
    checkEmptyUsername();
    checkEmptyEmail();
    checkEmptyPassword();
    checkEmptyPasswordVer();
    checkValidEmail();
    checkPasswordLength();
    checkMatchingPassword();
})


//Check for empty fields
function checkEmptyUsername() {
    if(username.value.trim() === '') {               //trim to remove whitespace
        username.parentElement.className = 'su-form-control error';
        username.parentElement.querySelector('small').innerText = "This field cannot be blank"
    } else {
        username.parentElement.className = 'su-form-control success'
    }
}

function checkEmptyEmail() {
    if(email.value.trim() === '') {               //trim to remove whitespace
        email.parentElement.className = 'su-form-control error';
        email.parentElement.querySelector('small').innerText = "This field cannot be blank"
    } else {
        email.parentElement.className = 'su-form-control success'
    }
}

function checkEmptyPassword() {
    if(password.value.trim() === '') {               //trim to remove whitespace
        password.parentElement.className = 'su-form-control error';
        password.parentElement.querySelector('small').innerText = "This field cannot be blank"
    } else {
        password.parentElement.className = 'su-form-control success'
    }
}

function checkEmptyPasswordVer() {
    if(passwordVer.value.trim() === '') {               //trim to remove whitespace
        passwordVer.parentElement.className = 'su-form-control su-last error';
        passwordVer.parentElement.querySelector('small').innerText = "This field cannot be blank"
    } else {
        passwordVer.parentElement.className = 'su-form-control su-last success'
    }
}


//checks if email field contains @ and . and if not returns error message
function checkValidEmail() {
    if(email.value.trim().includes("@") && email.value.trim().includes(".")) {
        email.parentElement.className = 'su-form-control success'
    } else {
        email.parentElement.className = 'su-form-control error';
        email.parentElement.querySelector('small').innerText = "Please enter a valid email"
    }
}


//check password is longer than 6 characters
function checkPasswordLength() {
    if(password.value.trim().length > 6) {
        password.parentElement.className = 'su-form-control success';
    } else {
        password.parentElement.className = 'su-form-control error';
        password.parentElement.querySelector('small').innerText = "Password must be at least 6 characters"
    }
}

function checkMatchingPassword() {
    if (password.value.trim() === passwordVer.value.trim()) {
        passwordVer.parentElement.className = 'su-form-control su-last success';
    } else {
        password.parentElement.className = 'su-form-control su-last error';
        password.parentElement.querySelector('small').innerText = "Passwords must match"
        passwordVer.parentElement.className = 'su-form-control su-last error';
        passwordVer.parentElement.querySelector('small').innerText = "Passwords must match"
    }
}

