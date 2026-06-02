const inventory = [
    { productName: "Laptop", cost: 50000 },
    { productName: "Mobile", cost: 20000 },
    { productName: "Headphones", cost: 3000 }
];

const generateProductList = () => {
    return inventory.map(({ productName, cost }) => {
        return {
            name: productName,
            price: cost
        };
    });
};

module.exports = generateProductList;