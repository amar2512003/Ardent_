const user = {
    name: "Titli",
    email: "titli@gmail.com"
};

const extraInfo = {
    age: 21,
    city: "Tarakeswar"
};

function mergeProfile() {
    return { ...user, ...extraInfo };
}

module.exports = mergeProfile;