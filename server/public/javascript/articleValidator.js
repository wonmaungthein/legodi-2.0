const articleTitle = document.getElementById('articleTitle')
const categoryId = document.getElementById('categoryId')
const status = document.getElementById('status')
const shortContent = document.getElementById('shortContent')
const fullContent = document.getElementById('fullContent')

const articleTitleError = document.getElementById('articleTitleError')
const categoryIdError = document.getElementById('categoryIdError')
const statusError = document.getElementById('statusError')
const shortContentError = document.getElementById('shortContentError')
const fullContentError = document.getElementById('fullContentError')

function verifier () {
  if (articleTitle !== null) {
    articleTitle.addEventListener('blur', articleTitleVerify, true)
  }
  if (categoryId !== null) {
    categoryId.addEventListener('blur', categoryIdVerify, true)
  }
  if (status !== null) {
    status.addEventListener('blur', statusVerify, true)
  }
  if (shortContent !== null) {
    shortContent.addEventListener('blur', shortContentVerify, true)
  }
  if (fullContent !== null) {
    fullContent.addEventListener('blur', fullContentVerify, true)
  }
}

verifier()

function articleValidator () {
  if (articleTitle && articleTitle.value === '') {
    articleTitle.style.border = '1px solid red'
    articleTitleError.textContent = 'Title is required'
    articleTitleError.style.color = 'red'
    articleTitle.focus()
    return false
  }
  if (categoryId && categoryId.value === '') {
    categoryId.style.border = '1px solid red'
    categoryIdError.textContent = 'Category is required'
    categoryIdError.style.color = 'red'
    categoryId.focus()
    return false
  }
  if (status && status.value === '') {
    status.style.border = '1px solid red'
    statusError.textContent = 'Status is required'
    statusError.style.color = 'red'
    status.focus()
    return false
  }
  if (shortContent && shortContent.value === '') {
    shortContent.style.border = '1px solid red'
    shortContentError.textContent = 'Short is required'
    shortContentError.style.color = 'red'
    shortContent.focus()
    return false
  }
  if (fullContent && fullContent.value === '') {
    fullContent.style.border = '1px solid red'
    fullContentError.textContent = 'Full content is required'
    fullContentError.style.color = 'red'
    fullContent.focus()
    return false
  }
}

function articleTitleVerify () {
  if (articleTitle.value != '') {
    articleTitle.style.border = '1px solid #5e6e66'
    articleTitleError.innerHTML = ''
    return true
  }
}

function categoryIdVerify () {
  if (categoryId.value != '') {
    categoryId.style.border = '1px solid #5e6e66'
    categoryIdError.innerHTML = ''
    return true
  }
}

function statusVerify () {
  if (status.value != '') {
    status.style.border = '1px solid #5e6e66'
    statusError.innerHTML = ''
    return true
  }
}

function shortContentVerify () {
  if (shortContent.value != '') {
    shortContent.style.border = '1px solid #5e6e66'
    shortContentError.innerHTML = ''
    return true
  }
}

function fullContentVerify () {
  if (fullContent.value != '') {
    fullContent.style.border = '1px solid #5e6e66'
    fullContentError.innerHTML = ''
    return true
  }
}
