const calculateGrade = (score) => {
    let result;

    if (score < 50) {
        result = "Fail";
    } else if (score < 60) {
        result = "Grade D";
    } else if (score < 70) {
        result = "Grade C";
    } else if (score < 80) {
        result = "Grade B";
    } else if (score < 90) {
        result = "Grade A";
    } else {
        result = "Grade A+";
    }

    return result;
};

module.exports = calculateGrade;