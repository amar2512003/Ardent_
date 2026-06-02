const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 3000 }
];

function productCards() {
    return products.map(product => ({
        name: product.name,
        price: product.price
    }));
}

module.exports = productCards;