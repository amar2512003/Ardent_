function loginValidation(email, password) {
    let validEmail = "a@gmail.com";
    let validPassword = "12345";

    if (email === validEmail && password === validPassword) {
        return "Login successful!";
    } else {
        return "login failed!";
    }
}

module.exports = loginValidation;