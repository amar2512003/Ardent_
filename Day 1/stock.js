const verifyInventory = (itemName, availableUnits) => {
    let stockStatus;

    if (availableUnits <= 0) {
        stockStatus = "product is out of stock";
    } else if (availableUnits <= 10) {
        stockStatus = "product is low in stock";
    } else {
        stockStatus = "product is in stock";
    }

    return stockStatus;
};

module.exports = verifyInventory;