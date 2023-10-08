const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require("../controllers/products")
// const adminData = require("./admin");
router.get(  '/showProducts', productsController.getProduct);
// console.log( "----------------");
// console.log( adminData.products);
//res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
// res.render( 'showProducts', {
//     title: "Show Available Products",
//     from: 'showProducts',
//     products : adminData.products
// });

module.exports = router;