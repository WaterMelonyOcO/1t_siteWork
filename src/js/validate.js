
// Name and telephone
const nameTel = document.getElementById('nameTelephone')
const inputs = document.querySelectorAll('.firstForm')
const nameInput = inputs[0]
const telInput = inputs[1]


function checkTelephone(tel) {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    re.test( String(tel) )
}

nameTel.onsubmit = function () {
    let nameInputValue = nameInput.value
    let telInputValue = telInput.value
    let emptyInputs = Array.from(inputs).filter(inputs => inputs.value === '')

    inputs.forEach((input) => {
        if (input.value === '') {
            input.classList.add('errorInput')
        }
        else {
            input.classList.remove('errorInput')
        }
    })

    if (emptyInputs.length !== 0) {
        return false
    }

    if (checkTelephone(telInputValue)) {
        telInput.classList.add('errorInput')
        return false
    }
    else {
        telInput.classList.remove('errorInput')
    }
}