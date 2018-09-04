// SELECTING ALL TEXT ELEMENTS
const languageId = document.getElementById('languageId')
const originalName = document.getElementById('originalName')
const longName = document.getElementById('longName')
const shortName = document.getElementById('shortName')
// SELECTING ALL ERROR DISPLAY ELEMENTS
const languageIdError = document.getElementById('languageIdError')
const originalNameError = document.getElementById('originalNameError')
const longNameError = document.getElementById('longNameError')
const shortNameError = document.getElementById('shortNameError')

// SETTING ALL EVENT LISTENERS
function verifier() {
    if (languageId !== null) {
        languageId.addEventListener('blur', languageVerify, true);
    }
    if (originalName !== null) {
        originalName.addEventListener('blur', originalNameVerify, true);
    }
    if (longName !== null) {
        longName.addEventListener('blur', longNameVerify, true);
    }
    if (shortName !== null) {
        shortName.addEventListener('blur', shortNameVerify, true);
    }
}

verifier()

function validate() {
    // validate languageId
    if (languageId && languageId.value === "") {
        languageId.style.border = "1px solid red";
        languageIdError.textContent = "Language Id is required";
        shortNameError.style.color = 'red'
        languageId.focus();
        return false;
    }

    if (originalName.value === "") {
        originalName.style.border = "1px solid red";
        originalNameError.textContent = "Original name is required";
        shortNameError.style.color = 'red'
        originalName.focus();
        return false;
    }

    if (longName.value === "") {
        longName.style.border = "1px solid red";
        longNameError.textContent = "Long name is required";
        shortNameError.style.color = 'red'
        longName.focus();
        return false;
    }

    if (shortName.value === "") {
        shortName.style.border = "1px solid red";
        shortNameError.textContent = "Short name is required";
        shortNameError.style.color = 'red'
        shortName.focus();
        return false;
    }
}

// event handler functions
function languageVerify() {
    if (languageId.value != "") {
        languageId.style.border = "1px solid #5e6e66";
        languageIdError.innerHTML = "";
        return true;
    }
}

function originalNameVerify() {
    if (originalName.value != "") {
        originalName.style.border = "1px solid #5e6e66";
        originalNameError.innerHTML = "";
        return true;
    }
}

function longNameVerify() {
    if (longName.value != "") {
        longName.style.border = "1px solid #5e6e66";
        longNameError.innerHTML = "";
        return true;
    }
}

function shortNameVerify() {
    if (shortName.value != "") {
        shortName.style.border = "1px solid #5e6e66";
        shortNameError.innerHTML = "";
        return true;
    }
}