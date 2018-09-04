const title = document.getElementById('title')
const choiceA = document.getElementById('choiceA')
const choiceB = document.getElementById('choiceB')
const choiceC = document.getElementById('choiceC')
const choiceD = document.getElementById('choiceD')
const answer = document.getElementById('answer')

const titleError = document.getElementById('titleError')
const choiceAError = document.getElementById('choiceAError')
const choiceBError = document.getElementById('choiceBError')
const choiceCError = document.getElementById('choiceCError')
const choiceDError = document.getElementById('choiceDError')
const answerError = document.getElementById('answerError')

function verifier () {
  if (title !== null) {
    title.addEventListener('blur', titleVerify, true)
  }
  if (choiceA !== null) {
    choiceA.addEventListener('blur', choiceAVerify, true)
  }
  if (choiceB !== null) {
    choiceB.addEventListener('blur', choiceBVerify, true)
  }
  if (choiceC !== null) {
    choiceC.addEventListener('blur', choiceCVerify, true)
  }
  if (choiceD !== null) {
    choiceD.addEventListener('blur', choiceDVerify, true)
  }
  if (answer !== null) {
    answer.addEventListener('blur', answerVerify, true)
  }
}

verifier()

function weegieValidator () {
  if (title && title.value === '') {
    title.style.border = '1px solid red'
    titleError.textContent = 'Language Id is required'
    titleError.style.color = 'red'
    title.focus()
    return false
  }
  if (choiceA && choiceA.value === '') {
    choiceA.style.border = '1px solid red'
    choiceAError.textContent = 'Language Id is required'
    choiceAError.style.color = 'red'
    choiceA.focus()
    return false
  }
  if (choiceB && choiceB.value === '') {
    choiceB.style.border = '1px solid red'
    choiceBError.textContent = 'Language Id is required'
    choiceBError.style.color = 'red'
    choiceB.focus()
    return false
  }
  if (choiceC && choiceC.value === '') {
    choiceC.style.border = '1px solid red'
    choiceCError.textContent = 'Language Id is required'
    choiceCError.style.color = 'red'
    choiceC.focus()
    return false
  }
  if (choiceD && choiceD.value === '') {
    choiceD.style.border = '1px solid red'
    choiceDError.textContent = 'Language Id is required'
    choiceDError.style.color = 'red'
    choiceD.focus()
    return false
  }
  if (answer && answer.value === '') {
    answer.style.border = '1px solid red'
    answerError.textContent = 'Language Id is required'
    answerError.style.color = 'red'
    answer.focus()
    return false
  }
}

function titleVerify () {
  if (title.value !== '') {
    title.style.border = '1px solid #5e6e66'
    titleError.innerHTML = ''
    return true
  }
}

function choiceAVerify () {
  if (choiceA.value !== '') {
    choiceA.style.border = '1px solid #5e6e66'
    choiceAError.innerHTML = ''
    return true
  }
}

function choiceBVerify () {
  if (choiceB.value !== '') {
    choiceB.style.border = '1px solid #5e6e66'
    choiceBError.innerHTML = ''
    return true
  }
}

function choiceCVerify () {
  if (choiceC.value !== '') {
    choiceC.style.border = '1px solid #5e6e66'
    choiceCError.innerHTML = ''
    return true
  }
}

function choiceDVerify () {
  if (choiceD.value !== '') {
    choiceD.style.border = '1px solid #5e6e66'
    choiceDError.innerHTML = ''
    return true
  }
}

function answerVerify () {
  if (answer.value !== '') {
    answer.style.border = '1px solid #5e6e66'
    answerError.innerHTML = ''
    return true
  }
}
