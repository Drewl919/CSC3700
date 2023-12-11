const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller")

router.get( '/candles', controller.showCandles);
router.get( '/candles/:id', controller.showCandle);



exports.routes = router;