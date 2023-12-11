let candles = [
    {
        "id": "1",
        "name": "Soothing Lavender",
        "price": 12.99,
        "description": "A calming lavender-scented candle, perfect for relaxation.",
        "details": {
            "burn_time": "20 hours"
        }
    },
    {
        "id": "2",
        "name": "Warm Vanilla Spice",
        "price": 14.99,
        "description": "Indulge in the sweet and comforting aroma of warm vanilla with a hint of spice.",
        "details": {
            "burn_time": "25 hours"
        }
    },
    {
        "id": "3",
        "name": "Citrus Burst",
        "price": 10.50,
        "description": "Energize your space with the invigorating fragrance of citrus fruits.",
        "details": {
            "burn_time": "18 hours"
        }
    },
    {
        "id": "4",
        "name": "Cozy Fireside",
        "price": 18.75,
        "description": "Experience the warmth and ambiance of a cozy fireside with this woodsy-scented candle.",
        "details": {
            "burn_time": "30 hours"
        }
    },
    {
        "id": "5",
        "name": "Ocean Breeze",
        "price": 16.25,
        "description": "Bring the freshness of the ocean into your home with this breezy scented candle.",
        "details": {
            "burn_time": "22 hours"
        }
    }
]

module.exports = class Candles {
    constructor( i, n, p, desc, d ) {
        this.id = i;
        this.name = n;
        this.price = p;
        this.description = desc;
        this.details = d;
    }

    static fetchAll(){
        console.log(candles)
        return candles;
    }
    static findById(id) {
        for (let i = 0; i < candles.length; i++) {
            if(id === candles[i].id ) {
                return candles[i];
            }
        }
    }
}