function trackOrder(status){
    if (status ==="Shipped"){
        return "Order has been shipped";
    } else if (status ==="Delivered"){
        return "Order has been delivered";
    } else {
        return "Invalid Order Status";
    }
}
module.exports = trackOrder;