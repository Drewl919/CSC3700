const db = require("../util/database");

module.exports = class Product {
    constructor(t, a, p) {
        this.title = t;
        this.author = a;
        this.price = p;
    }

    // save() {
    //     // products.push( this );
    //     fs.readFile(p, (err, fContent) => {
    //         // got the file and ready
    //         let products = [];
    //         if (!err) {
    //             products = JSON.parse(fContent);
    //         }
    //         products.push(this);
    //         fs.writeFile(p, JSON.stringify(products), (err) => {
    //             console.log("Write Erro?");
    //             console.log(err);
    //         })
    //
    //     })
    // }
    static delete( id ) {
        return db.execute( "delete from products where id = ?",
            [id]
        )
    }
    static fetchAll() {
        return db.execute("select * from products");
    }
}