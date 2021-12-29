// Form Validation Sign Up
const form = document.getElementById('su-form');
const username = document.getElementById('su-username');
const email = document.getElementById('su-email');
const password = document.getElementById('su-password');
const passwordVer = document.getElementById('su-password-ver');
const button = document.querySelectorAll('.btn');


//Event to validate form. Calls functions which check individual values in each
form.addEventListener('click', (e) => {
    e.preventDefault();
    
    //check for empty fields
    checkEmptyUsername();
    checkEmptyEmail();
    checkEmptyPassword();
    checkEmptyPasswordVer();
    checkValidEmail();

    
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

//This would be better with regex, have emailed Joaquin
//checks if email field contains @ and . and if not returns error message
function checkValidEmail() {
    if(email.value.trim().includes("@") && email.value.trim().includes(".")) {
        email.parentElement.className = 'su-form-control success'
    } else {
        email.parentElement.className = 'su-form-control error';
        email.parentElement.querySelector('small').innerText = "Please enter a valid email"
    }
}



let passcheck = 'hello'

for (let i = 0; i = passcheck.length; i++) {
    if (i === i.toUpperCase()) {
        console.log('')
    }
}





/* Left To Do!!!!!!!

BUT FIRST WAIT FOR JOAQUIN TO REPLY ABOUT REGEX

- finish email verification

- check that first password has a capital letter, a number and is more than 8 characters and contains a character from 
'@#$%!£-?<>'
- if password contains another character, return error. this symbol not allowed
- check that second password matches first password
- refactor code so there is one function for each field


*/
