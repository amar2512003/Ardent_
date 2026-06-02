const inventoryItems = [
    { productId: 1, productName: "Laptop", amount: 50000 },
    { productId: 2, productName: "Mobile", amount: 20000 },
    { productId: 3, productName: "Headphones", amount: 3000 }
];

const getItemById = (searchId) => {
    const item = inventoryItems.find(({ productId }) => productId === searchId);

    if (!item) {
        return undefined;
    }

    return {
        id: item.productId,
        name: item.productName,
        price: item.amount
    };
};

module.exports = getItemById;