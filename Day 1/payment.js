const checkPaymentStatus = (paymentState) => {
    const statusMessages = {
        success: "Payment Successful",
        pending: "Payment Pending"
    };

    return statusMessages[paymentState] || "Payment Failed";
};

module.exports = checkPaymentStatus;