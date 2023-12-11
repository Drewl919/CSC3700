const candles = require("../models/candles");

exports.showCandles = ( req, res, next) => {
    res.status(200).json(candles.fetchAll());
}
exports.showCandle = ( req, res, next) => {
    let id = req.params.id;
    res.status(200).json(candles.findById(id))
}