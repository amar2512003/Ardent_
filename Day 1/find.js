const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
];

function findProduct(id) {
    return products.find(product => product.id === id);
}

module.exports = findProduct;