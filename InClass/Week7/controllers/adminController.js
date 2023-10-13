const adminData = require("../routes/admin");
// const Product = require("../models/oproduct");
const Product = require("../models/product");
// let products = [];
exports.getAddProduct = ( req, res, next) => {
    res.render( 'admin/addProduct',
        {
            from: 'addProduct'
        })
}
exports.postAddProduct = ( req, res, next) => {
    let t = req.body.title;
    let a = req.body.author;
    let p = req.body.price
    const product = new Product( t, a, p );
    product.save();
    // products.push({
    //     title: t,
    //     author: a,
    //     price: p
    // })
    res.redirect('/add-product')
}
exports.getProducts = ( req, res, next ) => {
    // const products = Product.fetchAll();
    // res.render( 'showProducts', {
    //     title: "Show Available Products",
    //     from: 'showProducts',
    //     products : products
    // });
     Product.fetchAll( products => {
        res.render( 'admin/showProductsAdmin', {
            title: "Show Available Products",
            from: 'showProducts',
            products : products
        });
    });
}
exports.deleteProduct = ( req, res, next ) => {
    let id = req.params.id;
    console.log(`id:${id}`);
    res.send("Happy day" +id);
}

exports.editProduct = (req, res, next) => {
    let id = req.params.id;
    // Fetch all the records and find the idth one
    Product.fetchAll(products => {
        //
        for( let i=0; i<products.length; i++ ) {
            if( i == id ) {
                console.log("Product gotten");
                console.log(products[i]);
                res.render( 'admin/ShowUpdateForm', {
                    title: `Update record:${id} `,
                    id: id,
                    from: 'updateProducts',
                    product:products[i]
                })
                return;
            }
        }
        // This is the case where you did not find the id
        res.render( 'admin/ShowUpdateForm', {
            title: `Update record:${id} `,
            id: id,
            from: 'updateProducts',
            product: null
        })
    })
    // res.send("Happy day is edit again" +id);
}

exports.postUpdateProduct = ( req, res, next ) => {
    let id = req.body.productID;
    console.log(`ID: ${id}`)
    console.log(`Author ${req.body.author}`)
    res.send("Happy Days are here again made it to post update product" + id)
}