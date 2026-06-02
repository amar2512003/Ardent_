const customerReviews = [];

const storeFeedback = (customerName, reviewText) => {
    const reviewEntry = {
        user: customerName,
        feedback: reviewText
    };

    customerReviews.push(reviewEntry);

    return customerReviews;
};

module.exports = storeFeedback;