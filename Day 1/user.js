const profileData = {
    fullName: "Amar",
    userAge: 22,
    contactEmail: "sinhaamar178@gmail.com"
};

const getProfileInfo = () => {
    const {
        fullName,
        userAge,
        contactEmail
    } = profileData;

    return {
        name: fullName,
        age: userAge,
        email: contactEmail
    };
};

module.exports = getProfileInfo;