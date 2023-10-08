const products = []

module.exports = class product {
    constructor(t, a, p) {
        this.title = t;
        this.author = a;
        this.price = p;
    }

    save() {
        products.push(this);
    }
    static fetchAll() {
        return products;
    }

}