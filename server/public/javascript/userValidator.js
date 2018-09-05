const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const role = document.getElementById('role')

const fullNameError = document.getElementById('fullNameError')
const emailError = document.getElementById('emailError')
const roleError = document.getElementById('roleError')

if (fullName !== null) {
    fullName.addEventListener('blur', fullNameVerify, true);
}
if (email !== null) {
    email.addEventListener('blur', emailVerify, true);
}
if (role !== null) {
    role.addEventListener('blur', roleVerify, true);
}

function usersValidator() {
    if (fullName && fullName.value === "") {
        fullName.style.border = "1px solid red";
        fullNameError.textContent = "Full name is required";
        fullNameError.style.color = 'red'
        fullName.focus();
        return false;
    }
    if (email && email.value === "") {
        email.style.border = "1px solid red";
        emailError.textContent = "Email Id is required";
        emailError.style.color = 'red'
        email.focus();
        return false;
    }
    if (role && role.value === "") {
        role.style.border = "1px solid red";
        roleError.textContent = "Role is required";
        roleError.style.color = 'red'
        role.focus();
        return false;
    }
}

function fullNameVerify() {
    if (fullName.value != "") {
        fullName.style.border = "1px solid #5e6e66";
        fullNameError.innerHTML = "";
        return true;
    }
}

function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        emailError.innerHTML = "";
        return true;
    }
}

function roleVerify() {
    if (role.value != "") {
        role.style.border = "1px solid #5e6e66";
        roleError.innerHTML = "";
        return true;
    }
}
