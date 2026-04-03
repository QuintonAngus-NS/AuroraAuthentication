// Screens

const loginScreen = document.getElementById('loginContainer')
const signUpScreen_Email = document.getElementById('signUpContainer1')
const signUpScreen_Passwords = document.getElementById('signUpContainer2')
const signUpScreen_Verify = document.getElementById('signUpVerifyContainer')
const passwordResetScreen_Email = document.getElementById('resetPassword1Container')
const passwordResetScreen_Passwords = document.getElementById('resetPassword2Container')


// Side Panel Display

const header = document.getElementById('backdropHeader')
const subHeader = document.getElementById('backdropSubText')

function displayHeader(headerText, subHeaderText) {
    header.innerHTML = headerText
    subHeader.innerHTML = subHeaderText
}

// User Interface Functions

function clearUserInterface() {
    loginScreen.style.display = 'none'
    signUpScreen_Email.style.display = 'none'
    signUpScreen_Passwords.style.display = 'none'
    signUpScreen_Verify.style.display = 'none'
    passwordResetScreen_Email.style.display = 'none'
    passwordResetScreen_Passwords.style.display = 'none'
}

function displayInterface(interface) {
    clearUserInterface()
    interface.style.display = 'flex'
}

// URL Params IF Statements

const type = new URLSearchParams(window.location.search).get('type')

if (type === 'login') {
    displayInterface(loginScreen)
    displayHeader('Welcome Back!', 'Login to aurora to continue, and bring clarity to your library management.')
} else if (type === 'signup') {
    displayInterface(signUpScreen_Email)
    displayHeader('Welcome To Aurora!', 'Aurora helps bring clarity to your library’s management, sign-up to learn more.')
} else if (type === 'reset') {
    const requestID = new URLSearchParams(window.location.search).get('requestID')
    displayInterface(passwordResetScreen_Passwords)
    displayHeader('Account Security', 'Remember to never share or reuse passwords, and to always use strong passwords.')
}

// Error Handling

function errorClear() {
    const errors = document.querySelectorAll('.error')
    errors.forEach(error => {
        error.style.display = 'none'
    });
}

function displayError(type, error, id) {
    errorClear()
    const errorID = document.getElementById(id)
    errorID.style.display = 'flex'
    if (type === 'warning') {
        errorID.innerHTML = `<span class="material-symbols-outlined errorIcon">warning</span>${error}`
    } else {
        errorID.innerHTML = `<span class="material-symbols-outlined errorIcon">cogs</span>${error}`
    }
}

// Login System Flow

const loginContinueBtn = document.getElementById('loginBtn')

loginContinueBtn.addEventListener('click', () => {
    const loginEmail = document.getElementById('loginEmailInput')
    const loginPassword = document.getElementById('loginPasswordInput')

    if (loginEmail.value.trim() === '' || loginPassword.value.trim() === '') {
        displayError('warning', 'Email & Password Required', 'loginError')
    } else {
        errorClear()
    }
})

// Sign-Up System Flow

const signUpEmailContinueBtn = document.getElementById('signUp1ContinueBtn')

signUpEmailContinueBtn.addEventListener('click', () => {
    const email = document.getElementById('signUpEmailInput').value.trim()

    if (email === '') {
        displayError('warning', 'Email Required For Sign-Up', 'signUp1Error')
    } else {
        errorClear()
        displayInterface(signUpContainer2)
        displayHeader('Clarity Awaits You!', 'With the help of aurora insights, you know who is reading what, and informing your management choices.')
    }
})

const signUpPasswordsContinueBtn = document.getElementById('signUp2ContinueBtn')

signUpPasswordsContinueBtn.addEventListener('click', () => {
    const password = document.getElementById('signUpPasswordInput')
    const confirmPassword = document.getElementById('signUpPasswordConfirmInput')

    if (password.value.trim() === '' || confirmPassword.value.trim() === '') {
        displayError('warning', 'Passwords Must Match', 'signUpPasswordError')
    } else if (password.value.trim() != confirmPassword.value.trim()) {
        displayError('warning', 'Password Required For Sign-Up', 'signUpPasswordError')
    } else {
        errorClear()
    }
})

// login / Sign-Up Links

const SignUpLink = document.getElementById('signUpLink')

SignUpLink.addEventListener('click', () => {
    window.location.href = 'https://auth.aurora.northern-star.online?type=signup'
})

