const productCards = require('./card');
const profileDashboard = require('./user');
const cartSummary = require('./shopping');
const filterCourses = require('./course');
const getProduct = require('./find');
const showWelcome = require('./welcome');
const fetchUserData = require('./async');
const combineProfiles = require('./merge');
const calculateResult = require('./arrow');
const validateLogin = require('./api');

console.log(productCards());
console.log(profileDashboard());
console.log(cartSummary());

const selectedCourse = filterCourses("Node");
console.log(selectedCourse);

const productInfo = getProduct(2);
console.log(productInfo);

console.log(showWelcome("Titli"));

fetchUserData()
    .then(data => {
        console.log(data);
    });

console.log(combineProfiles());

const sumResult = calculateResult(5, 3);
console.log(sumResult);

validateLogin("admin@gmail.com", "12345")
    .then(response => {
        console.log(response);
    });