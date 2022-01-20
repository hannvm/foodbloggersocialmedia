//array con usernames and passwords
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

//capturar los inputs del formulario en variables
const form = document.getElementById('su-form');
const username = document.getElementById('su-username');
const password = document.getElementById('su-password');
const buttons = document.querySelector('.buttons')


//add event listener en los botones del formulario
buttons.addEventListener('click', (e) => {
    e.preventDefault();                     //prevenir la accion default del navegador

    //capturar valores de los inputs en un variable sin espacio blanco
    let user = username.value.trim()           
    let userPass = password.value.trim()
    //variable que es un object con el username y password donde el username es igual al valor del inout del formulario
    let userObject = accounts.find( ({ username }) => username === user)

    //aprobar que existe el username
    if (userObject) {    //si el username existe, anadir el class success
        username.parentElement.className = 'su-form-control success'
    } else {          //si no existe, anadir el class error y el mensaje de error
        username.parentElement.className = 'su-form-control error';
        username.parentElement.querySelector('small').innerText = "This username does not exist"
    }


    //aprobar que la constrasena el los datos es igual que el valor del formulario
    if (userPass === userObject.password) {  //si son iguales, anadir class exito
        password.parentElement.className = 'su-form-control success'
    } else {          //si no, anadir class error y mostrar mensaje de error
        password.parentElement.className = 'su-form-control error';
        password.parentElement.querySelector('small').innerText = "The username and password do not match"
    }
});