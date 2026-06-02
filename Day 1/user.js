const user = {
    name: "Titli",
    age: 21,
    email: "titli@gmail.com"
};

function userProfile() {
    const { name, age, email } = user;

    return { name, age, email };
}

module.exports = userProfile;