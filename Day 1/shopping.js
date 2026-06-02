const shoppingItems = [
    { product: "Laptop", cost: 50000 },
    { product: "Mouse", cost: 1000 },
    { product: "Keyboard", cost: 2000 }
];

const calculateCartValue = () => {
    const totalAmount = shoppingItems.reduce((sum, currentItem) => {
        return sum + currentItem.cost;
    }, 0);

    return totalAmount;
};

module.exports = calculateCartValue;