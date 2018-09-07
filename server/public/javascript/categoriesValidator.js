const icon = document.getElementById('icon')
const order = document.getElementById('order')
const categoryTitle = document.getElementById('categoryTitle')
const categoryCityId = document.getElementById('categoryCityId')
const categoryStatus = document.getElementById('categoryStatus')
const categoryLanguageId = document.getElementById('categoryLanguageId')
const categoryFullContent = document.getElementById('categoryFullContent')
const categoryShortContent = document.getElementById('categoryShortContent')

const iconError = document.getElementById('iconError')
const orderError = document.getElementById('orderError')
const categoryTitleError = document.getElementById('categoryTitleError')
const categoryCityIdError = document.getElementById('categoryCityIdError')
const categoryStatusError = document.getElementById('categoryStatusError')
const categoryLanguageIdError = document.getElementById('categoryLanguageIdError')
const categoryFullContentError = document.getElementById('categoryFullContentError')
const categoryShortContentError = document.getElementById('categoryShortContentError')

if (categoryTitle !== null) {
    categoryTitle.addEventListener('blur', categoryTitleVerify, true);
}
if (icon !== null) {
    icon.addEventListener('blur', iconVerify, true);
}
if (order !== null) {
    order.addEventListener('blur', orderVerify, true);
}
if (categoryStatus !== null) {
    categoryStatus.addEventListener('blur', categoryStatusVerify, true);
}
if (categoryLanguageId !== null) {
    categoryLanguageId.addEventListener('blur', categoryLanguageIdVerify, true);
}
if (categoryCityId !== null) {
    categoryCityId.addEventListener('blur', categoryCityIdVerify, true);
}
if (categoryShortContent !== null) {
    categoryShortContent.addEventListener('blur', categoryShortContentVerify, true);
}
if (categoryFullContent !== null) {
    categoryFullContent.addEventListener('blur', categoryFullContentVerify, true);
}

function categoryValidator() {
    if (categoryTitle && categoryTitle.value === "") {
        categoryTitle.style.border = "1px solid red";
        categoryTitleError.textContent = "Title is required";
        categoryTitleError.style.color = 'red'
        categoryTitle.focus();
        return false;
    }
    if (order && order.value === "") {
        order.style.border = "1px solid red";
        orderError.textContent = "Order is required";
        orderError.style.color = 'red'
        order.focus();
        return false;
    }
    if (icon && icon.value === "") {
        icon.style.border = "1px solid red";
        iconError.textContent = "Icon is required";
        iconError.style.color = 'red'
        icon.focus();
        return false;
    }
    if (categoryStatus && categoryStatus.value === "") {
        categoryStatus.style.border = "1px solid red";
        categoryStatusError.textContent = "Status is required";
        categoryStatusError.style.color = 'red'
        categoryStatus.focus();
        return false;
    }
    if (categoryLanguageId && categoryLanguageId.value === "") {
        categoryLanguageId.style.border = "1px solid red";
        categoryLanguageIdError.textContent = "Language is required";
        categoryLanguageIdError.style.color = 'red'
        categoryLanguageId.focus();
        return false;
    }
    if (categoryCityId && categoryCityId.value === "") {
        categoryCityId.style.border = "1px solid red";
        categoryCityIdError.textContent = "City is required";
        categoryCityIdError.style.color = 'red'
        categoryCityId.focus();
        return false;
    }
    if (categoryShortContent && categoryShortContent.value === "") {
        categoryShortContent.style.border = "1px solid red";
        categoryShortContentError.textContent = "Short description is required";
        categoryShortContentError.style.color = 'red'
        categoryShortContent.focus();
        return false;
    }
    if (categoryFullContent && categoryFullContent.value === "") {
        categoryFullContent.style.border = "1px solid red";
        categoryFullContentError.textContent = "Long description is required";
        categoryFullContentError.style.color = 'red'
        categoryFullContent.focus();
        return false;
    }
}

function categoryTitleVerify() {
    if (categoryTitle.value != "") {
        categoryTitle.style.border = "1px solid #5e6e66";
        categoryTitleError.innerHTML = "";
        return true;
    }
}

function orderVerify() {
    if (order.value != "") {
        order.style.border = "1px solid #5e6e66";
        orderError.innerHTML = "";
        return true;
    }
}

function iconVerify() {
    if (icon.value != "") {
        icon.style.border = "1px solid #5e6e66";
        iconError.innerHTML = "";
        return true;
    }
}

function categoryStatusVerify() {
    if (categoryStatus.value != "") {
        categoryStatus.style.border = "1px solid #5e6e66";
        categoryStatusError.innerHTML = "";
        return true;
    }
}

function categoryLanguageIdVerify() {
    if (categoryLanguageId.value != "") {
        categoryLanguageId.style.border = "1px solid #5e6e66";
        categoryLanguageIdError.innerHTML = "";
        return true;
    }
}

function categoryCityIdVerify() {
    if (categoryCityId.value != "") {
        categoryCityId.style.border = "1px solid #5e6e66";
        categoryCityIdError.innerHTML = "";
        return true;
    }
}

function categoryShortContentVerify() {
    if (categoryShortContent.value != "") {
        categoryShortContent.style.border = "1px solid #5e6e66";
        categoryShortContentError.innerHTML = "";
        return true;
    }
}

function categoryFullContentVerify() {
    if (categoryFullContent.value != "") {
        categoryFullContent.style.border = "1px solid #5e6e66";
        categoryFullContentError.innerHTML = "";
        return true;
    }
}