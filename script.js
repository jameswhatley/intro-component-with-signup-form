const form = document.getElementById('signupForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

function checkIfFieldEmpty(...fields) {
    for (const field of fields) {
        if (!field.value) {
           showErrorMessage(field, `${field.getAttribute("placeholder")} cannot be empty.`);
        } else {
            field.classList.remove('error')
            field.nextElementSibling.classList.add('hide');
        }
    }
}

function showErrorMessage(field, message) {
    field.classList.add('error');

    const errText = field.nextElementSibling;
    errText.classList.remove('hide');
    errText.textContent = message;
}

function validateEmail(email) {
    const emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    checkIfFieldEmpty(...[firstName, lastName, email, password]);
    if (!validateEmail(email.value)) {
        showErrorMessage(email, 'Looks like this is not an email')
    }
});
