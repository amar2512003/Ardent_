function registerUser(name, email) {
    return {
        name,
        email,
        message: "Registration Successful"
    };
}

module.exports = registerUser;