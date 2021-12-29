const accounts = [
    {
        username : 'tony4321',
        password : 'Insecurepassword4!'
    },
    {
        username : 'mariadiaz11',
        password : 'Eg$7r4sX2'
    },
    {
        username : 'pedrocooks',
        password : 'GP-8zeN!3Z'
    },
    {
        username : 'beth.elle',
        password : 'w?Ez>=5ZrYserd'
    }
]


// let user = 'pedrocooks'

// const result = accounts.find( ({ username }) => username === user)

// console.log(result)


/*  NEED TO
    -encrypt passwords
*/


const form = document.getElementById('su-form');
const username = document.getElementById('su-username');
const password = document.getElementById('su-password');
const button = document.querySelectorAll('.btn');


form.addEventListener('click', (e) => {
    e.preventDefault();

    //catch username input in form
    let user = username.value.trim()
    let userPass = password.value.trim()
    let userObject = accounts.find( ({ username }) => username === user)

    //check if username exists
    if (userObject) {    //if username in accounts data, add success class
        username.parentElement.className = 'su-form-control success'
    } else {          //username not found, add error class and error message
        username.parentElement.className = 'su-form-control error';
        username.parentElement.querySelector('small').innerText = "This username does not exist"
    }


    //check if data password and user input password are the same
    if (userPass === userObject.password) {  //username and password match, add success class
        password.parentElement.className = 'su-form-control success'
    } else {          //no match, password error message
        password.parentElement.className = 'su-form-control error';
        password.parentElement.querySelector('small').innerText = "The username and password do not match"
    }
});

