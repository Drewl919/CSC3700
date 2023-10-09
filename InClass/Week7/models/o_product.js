const adminData = require("fs");
const Product = require("path");

const products = [];

module.exports = class Product {
    constructor(t, a, p) {
        this.title = t;
        this.author = a;
        this.price = p;
    }
    save() {
        products.push( this );
    }
    static fetchAll() {
        return products;
    }
}