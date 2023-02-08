const button = document.querySelector(`.button`)
const showDivPassword = document.querySelector(`.showDivPassword`)
const verifyButton = document.querySelector(`.verifyButton`)
const showDivAccount = document.querySelector(`.showDivAccount`)
const registerBtn = document.querySelector(`.registerBtn`)

let newUser = {
    email: `.`,
    login: ``,
    password: ``
}

const loginFunction = () => {
    const login = document.querySelector(`.inputLogin`).value
    const password = document.querySelector(`.inputPassword`).value
    const text = document.querySelector(`.textInfo`)

    if (login == newUser.login && password == newUser.password) {
        text.style.color = `green`
        text.innerHTML = `Login details is correct`
    } else if (login == `` && password == ``) {
        text.innerHTML = ``
    } else if (login == newUser.login && password == ``) {
        text.style.color = `orange`
        text.innerHTML = `Enter the password`
    } else if (login == `` && password == newUser.password) {
        text.style.color = `orange`
        text.innerHTML = `Enter the login`
    } else {
        text.style.color = `red`
        text.innerHTML = `Login or password is not correct`
    }
}

const showRemindPassword = () => {
    document.getElementById(`showDiv1`).style.display = `inline`
}

const remindPassword = () => {
    const sendEmail = document.querySelector(`.inputRemindPassword`).value
    if (sendEmail == newUser.email) {
        document.getElementById(`showDiv1`).style.display = `none`
        alert(`Password will be send in your address e-mail`)
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "loginpagetest000@gmail.com",
            Password: "7DB58D35F12345C347CF7B2F1A16BAFB79F3",
            To: sendEmail,
            From: "loginpagetest000@gmail.com",
            Subject: `Password reminder`,
            Body: "Your password is:" + ` ` + newUser.password,
        }).then(
            message => alert(message)
        );
    } else if (sendEmail != newUser.email) {
        alert(`Check your e-mail!`)
    }
}

const showCreateAccountDiv = () => {
    document.getElementById(`showDiv2`).style.display = `block`
}

const createNewUser = () => {
    const emailInpt = document.querySelector(`.emailInpt`).value
    const loginInpt = document.querySelector(`.loginInpt`).value
    const passwordInpt = document.querySelector(`.passwordInpt`).value


    if (emailInpt != "" && loginInpt != "" && passwordInpt != "") {
        document.getElementById(`showDiv2`).style.display = `none`
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "loginpagetest000@gmail.com",
            Password: "7DB58D35F12345C347CF7B2F1A16BAFB79F3",
            To: emailInpt,
            From: "loginpagetest000@gmail.com",
            Subject: `Welcome in our website`,
            Body: "Welcoem in our website, this is your account login data:<br> Login: " + loginInpt + "<br> " + `password: ` + passwordInpt
        }).then(
            message => alert(message)
        );
        newUser.email = emailInpt
        newUser.login = loginInpt
        newUser.password = passwordInpt

        console.log(newUser.email)
        console.log(newUser.login)
        console.log(newUser.password)
    } else {
        alert(`Check your data!`)
    }
}


button.addEventListener(`click`, loginFunction)
verifyButton.addEventListener(`click`, remindPassword)
showDivAccount.addEventListener(`click`, showCreateAccountDiv)
showDivPassword.addEventListener(`click`, showRemindPassword)
registerBtn.addEventListener(`click`, createNewUser)

