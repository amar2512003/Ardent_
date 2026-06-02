const authenticateUser = async (userEmail, userPassword) => {
    try {
        const validUser = {
            email: "admin@gmail.com",
            password: "12345"
        };

        const isAuthenticated =
            userEmail === validUser.email &&
            userPassword === validUser.password;

        if (!isAuthenticated) {
            throw new Error("Invalid Credentials");
        }

        return "Login Successful";
    } catch (err) {
        return err.message;
    }
};

module.exports = authenticateUser;