const availableCourses = [
    "React",
    "Node",
    "Python",
    "JavaScript"
];

const searchCourses = (searchText) => {
    const matchedCourses = availableCourses.filter((item) => {
        return item.indexOf(searchText) !== -1;
    });

    return matchedCourses;
};

module.exports = searchCourses;