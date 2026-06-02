const authenticate = (userEmail, userPassword) => {
    const credentials = {
        email: "a@gmail.com",
        password: "12345"
    };

    const isValidUser =
        userEmail === credentials.email &&
        userPassword === credentials.password;

    return isValidUser
        ? "Login successful!"
        : "login failed!";
};

module.exports = authenticate;