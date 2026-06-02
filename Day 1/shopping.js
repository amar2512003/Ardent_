const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function cartTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

module.exports = cartTotal;