const courses = [
    "React",
    "Node",
    "Python",
    "JavaScript"
];

function filterCourses(keyword) {
    return courses.filter(course => course.includes(keyword));
}

module.exports = filterCourses;