async function login(email, password) {
    try {
        if (email === "admin@gmail.com" && password === "12345") {
            return "Login Successful";
        }

        throw new Error("Invalid Credentials");
    } catch (error) {
        return error.message;
    }
}

module.exports = login;