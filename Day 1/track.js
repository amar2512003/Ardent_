const getOrderUpdate = (orderState) => {
    const orderMessages = {
        Shipped: "Order has been shipped",
        Delivered: "Order has been delivered"
    };

    return orderMessages[orderState] || "Invalid Order Status";
};

module.exports = getOrderUpdate;