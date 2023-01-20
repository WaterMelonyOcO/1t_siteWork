const smsForm = document.getElementById('smsForm')
const secondInput = document.querySelectorAll('.secondInputs')
const smsInput = secondInput[0]



function checkSms(sms) {
    console.log(smsInputValue)
    let re = /^\w+$/
    re.test( String(sms) )
}



smsForm.onsubmit = function () {
    smsInputValue = smsInput.value

    if (smsInputValue.replace(/\s/g, "").length === 0) {
        smsInput.classList.add('errorInput')
        console.log('error')
        return false
    }
    else {
        smsInput.classList.remove('errorInput')
        console.log('access')
    }
    if (checkSms(smsInputValue)) {
        debugger
        smsInput.classList.add('errorInput')
        return false
    }
    else {
        debugger
        smsInput.classList.remove('errorInput')
    }
}