const alertElement = document.getElementById('alert');
const tryAgainElement = document.getElementById('alert-2');

const isValidEmail = (email) => {
    const emailRegEx = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = emailRegEx.test(email);

    return isValid;
}

export default isValidEmail;