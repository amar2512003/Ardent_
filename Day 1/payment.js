function ps(status) {
    if (status === "success") {
        return "Payment Successful";
    } else if (status === "pending") {
        return "Payment Pending";
    } else {
        return "Payment Failed";
    }
}

module.exports = ps;