const form = document.getElementById('js-form');
const firstname = document.getElementById('js-first-name');
const lastname = document.getElementById('js-last-name');
const email = document.getElementById('js-email');
const password = document.getElementById('js-password');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if(firstnameValue === ''){
        addErrorMessage(firstname, 'First Name cannot be empty');
    } else {
        deleteErrorMessage(firstname);
    }
    if(lastnameValue === ''){
        addErrorMessage(lastname, 'Last Name cannot be empty');
    } else{
        deleteErrorMessage(lastname);
    }

    if(emailValue === ""){
        addErrorMessage(email, 'Email cannot be empty');
    } else if ( emailValue!=='' && !validateEmail(emailValue)){
        addErrorMessage(email, 'Looks like this is not an email')
    } else{
        deleteErrorMessage(email);
    }
    
    if(passwordValue === ''){
        addErrorMessage(password, 'Password cannot be empty');
    } else{
        deleteErrorMessage(password);
    }

})

function addErrorMessage(field, message){
    const formControl = field.parentNode;
    formControl.classList.add('error');
    const error = formControl.querySelector('p');
    error.innerText = message;
    error.style.opacity = 1;
}

function deleteErrorMessage(field){
    const formControl = field.parentNode;
    formControl.classList.remove('error');
    const error = formControl.querySelector('p');
    error.innerText = '';
    error.style.opacity = 0;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}