// Capturar todos los inputs del formulario en variables
const form = document.getElementById('su-form');
const username = document.getElementById('su-username');
const email = document.getElementById('su-email');
const password = document.getElementById('su-password');
const passwordVer = document.getElementById('su-password-ver');
const buttons = document.querySelector('.buttons');

//capturar los valores que han entrado el usuario en los inputs de password
const passOneValue = password.value.trim()
const passTwoValue = passwordVer.value.trim()


//evento para validar el formulario. Llama todos los funciones para aprobar los valores en cada uno
buttons.addEventListener('click', (e) => {          //addeventlistener para cuando el usuario hace click en un boton del formulario
    e.preventDefault();                             //prevenir la accion por defecto del navegador
    
    checkEmptyUsername();
    checkEmptyEmail();
    checkEmptyPassword();
    checkEmptyPasswordVer();
    checkValidEmail();
    checkPasswordLength();
    checkMatchingPassword();
})


//Funciones para aprobar que hay algo en todos los inputs, todos son iguales, pero cada uno es un input diferente
function checkEmptyUsername() {
    if(username.value.trim() === '') {               //trim para quitar espacio blanco, y condicional para ver si el valor es vacio
        username.parentElement.className = 'su-form-control error';     //si es vacio, anadir el class error para cambiar el color y mostrar el icono de error
        username.parentElement.querySelector('small').innerText = "This field cannot be blank"  //mostrar el mensaje de error
    } else {                                        //si no esta vacio, mostrar exito
        username.parentElement.className = 'su-form-control success'
    }
}

function checkEmptyEmail() {
    if(email.value.trim() === '') {             
        email.parentElement.className = 'su-form-control error';
        email.parentElement.querySelector('small').innerText = "This field cannot be blank"
    } else {
        email.parentElement.className = 'su-form-control success'
    }
}

function checkEmptyPassword() {
    if(password.value.trim() === '') {              
        password.parentElement.className = 'su-form-control error';
        password.parentElement.querySelector('small').innerText = "This field cannot be blank"
    } else {
        password.parentElement.className = 'su-form-control success'
    }
}

function checkEmptyPasswordVer() {
    if(passwordVer.value.trim() === '') {               
        passwordVer.parentElement.className = 'su-form-control su-last error';
        passwordVer.parentElement.querySelector('small').innerText = "This field cannot be blank"
    } else {
        passwordVer.parentElement.className = 'su-form-control su-last success'
    }
}


//funcion para aprobar que el input email contiene '@' y '.'
function checkValidEmail() {
    if(email.value.trim().includes("@") && email.value.trim().includes(".")) {      //if condicional, si el valor sin espacio blanco (trim) contiene @ y .
        email.parentElement.className = 'su-form-control success'                   //si contiene, mostrar exito
    } else {
        email.parentElement.className = 'su-form-control error';                    //si no tiene, mostrar error
        email.parentElement.querySelector('small').innerText = "Please enter a valid email"     //mostrar mensaje de error
    }
}


//aprobar que el largo de la contrasena es mas que 6 caracteres 
function checkPasswordLength() {
    if(password.value.trim().length > 6) {          //condicional if, si el largo sin espacio blanco es mas que 6
        password.parentElement.className = 'su-form-control success';       //mostrar exito
    } else {
        password.parentElement.className = 'su-form-control error';         //si no, mostrar error
        password.parentElement.querySelector('small').innerText = "Password must be at least 6 characters"      //mostrar mensaje de error
    }
}

//funcion para aprobar que las dos contrasenas son iguales
function checkMatchingPassword() {
    if (password.value.trim() === passwordVer.value.trim()) {           //si las contrasenas sin espacio blanco tienen valores iguales
        passwordVer.parentElement.className = 'su-form-control su-last success';        //anadir class exito
    } else {
        password.parentElement.className = 'su-form-control su-last error';             //si no, anadir class error y mensajes de error a los dos
        password.parentElement.querySelector('small').innerText = "Passwords must match"
        passwordVer.parentElement.className = 'su-form-control su-last error';
        passwordVer.parentElement.querySelector('small').innerText = "Passwords must match"
    }
}

