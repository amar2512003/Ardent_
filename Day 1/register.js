const createAccount = (fullName, emailAddress) => {
    const userDetails = {
        username: fullName,
        userEmail: emailAddress,
        status: "Registration Successful"
    };

    return userDetails;
};

module.exports = createAccount;