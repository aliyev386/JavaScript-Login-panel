
let name = document.querySelector('#ad')
let surname = document.querySelector('#soyad')
let password = document.querySelector('#password')
let email = document.querySelector('#email')
let phonenumber = document.querySelector('#phonenumber')
let signInButton = document.querySelector('#signInButton')

let nameValidation = document.querySelector('#nameValidation')
let surnameValidation = document.querySelector('#surnameValidation')
let passwordValidation = document.querySelector('#passwordValidation')
let emailValidation = document.querySelector('#emailValidation')
let phoneNumberValidation = document.querySelector('#phoneNumberValidation')

const strongPasswordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;
const emailUnicodeRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const azMobileRe = /^(?:(?:\+?994)|0)\s*(?:50|51|55|60|70|77|99)[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
const log = /^(?=.{3,30}$)[\p{L}\p{N}](?:[._-]?[\p{L}\p{N}]){1,29}$/u
 
function compareLogin(ev) {
    let comp = log.test(ev.target.value)
    if (ev.target.id === 'ad') {
        nameValidation.innerText = comp ? 'Okay' : 'Wrong'
    } else if (ev.target.id === 'soyad') {
        surnameValidation.innerText = comp ? 'Okay' : 'Wrong'
    }
}

name.addEventListener('input', compareLogin)
surname.addEventListener('input', compareLogin)

password.addEventListener('input', function (ev) {
    let comp = strongPasswordRe.test(ev.target.value)
    passwordValidation.innerText = comp ? 'Okay' : 'Wrong'
})
email.addEventListener('input', function (ev) {
    let comp = emailUnicodeRe.test(ev.target.value)
    emailValidation.innerText = comp ? 'Okay' : 'Wrong'
})
phonenumber.addEventListener('input', function (ev) {
    let comp = azMobileRe.test(ev.target.value)
    phoneNumberValidation.innerText = comp ? 'Okay' : 'Wrong'
})
signInButton.addEventListener('click', function (ev){
    if (nameValidation.innerText === 'Okay' && surnameValidation.innerText === 'Okay' && passwordValidation.innerText === 'Okay' && emailValidation.innerText === 'Okay' && phoneNumberValidation.innerText === 'Okay') {
        alert("Success!! \nRegistration compledet successfully.")
    }
    else {
        alert("Please fill all fields correctly!!!")
    }
})
