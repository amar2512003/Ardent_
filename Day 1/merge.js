const basicDetails = {
    fullName: "Amar",
    emailAddress: "sinhaamar178@gmail.com"
};

const personalInfo = {
    userAge: 22,
    location: "Kolkata"
};

const combineUserData = () => {
    const completeProfile = {
        ...basicDetails,
        ...personalInfo
    };

    return completeProfile;
};

module.exports = combineUserData;