const calculateOrderTotal = (unitPrice, itemCount) => {
    const finalCost = unitPrice * itemCount;

    return finalCost;
};

module.exports = calculateOrderTotal;