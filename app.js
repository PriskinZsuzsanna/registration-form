const formSection = document.querySelector('#form-section')
const successSection = document.querySelector('#success-section')
const form = document.querySelector('form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const confirmationInput = document.querySelector('#confirmation')
const select = document.querySelector('#select')
const checkbox = document.querySelector('#checkbox')
const checkLabel = document.querySelector('#check-label')
const errorMessage = document.querySelector('#error-message')
const inputs = document.querySelectorAll('.input')
const emails = document.querySelectorAll('.email')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkForEmailMatch()
    checkForRequiredFields()
    submitValidatedData()
})

function clear() {
    nameInput.value = ''
    emailInput.value = ''
    confirmationInput.value = ''
    select.value = ''
    checkbox.checked = false
}

function showError(msg, item) {
    errorMessage.classList.remove('d-unvisible')
    errorMessage.innerText = msg
    item.classList.add('invalid')
}

function removeError(item) {
    errorMessage.classList.add('d-unvisible')
    item.classList.remove('invalid')
}

function checkForEmailMatch() {
    if (emailInput.value !== confirmationInput.value) {
        emails.forEach(emailField => {
            showError('Hiba! Az email címek nem egyeznek!', emailField)

        })

        emails.forEach(emailField => {
            emailField.addEventListener('focus', () => {
                emails.forEach(emailField => {
                    removeError(emailField)
                })
            })
        })
    }
}

function checkForRequiredFields() {
    if (checkbox.checked == false) {
        showError('A nyilatkozat kitöltése kötelező!', checkLabel)

        checkbox.addEventListener('change', () => {
            removeError(checkLabel)
            return
        })
    }

    inputs.forEach(input => {
        if (input.value == '') {
            showError('Kérjük töltse ki az összes mezőt!', input)
        }

        input.addEventListener('focus', () => {
            removeError(input)
        })
    })
}

function submitValidatedData() {
    if (nameInput.value !== '' && emailInput.value != '' && confirmationInput.value != '' && select.value != '' && checkbox.checked !== false && emailInput.value == confirmationInput.value) {
        const data = {
            name: nameInput.value,
            email: emailInput.value,
            info: select.value
        }

        formSection.classList.add('d-none')
        successSection.classList.remove('d-none')

        clear()
    }
}