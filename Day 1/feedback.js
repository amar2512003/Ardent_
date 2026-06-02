const feedbacks = [];

function addfeedback(name, message) {
    const feedback = {
        name,
        message
    };

    feedbacks.push(feedback);
    return feedbacks;
}

module.exports = addfeedback;