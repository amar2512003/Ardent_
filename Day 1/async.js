const fetchUserProfile = async () => {
    const userInfo = {
        userId: 1,
        fullName: "Amar",
        userEmail: "sinhaamar178@gmail.com"
    };

    return userInfo;
};

module.exports = fetchUserProfile;