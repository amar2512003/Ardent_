function checkStock(product, stock){
    if (stock > 10){
        return "product is in stock";
    } else if (stock > 0) {
        return "product is low in stock";
    }else {
        return "product is out of stock";

    }
    }

    module.exports = checkStock;