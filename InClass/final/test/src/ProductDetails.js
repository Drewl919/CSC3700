import React from 'react';
import {useLocation} from 'react-router-dom'
import useFetch from "./useFetch";

function ProductDetails() {
    const location = useLocation();
    const {from} = location.state
    let url = "http://localhost:8000/candles/"+from;
    const {data : candle, isPending, error} = useFetch( url )
    console.log(candle)

    return (
        <div>
            <h2 className="titleProducts"> Product Details id={from}</h2>

            <div>
                { candle && (<ol>
                    <li> Item: {candle.name} </li>
                    <li> Price: {candle.price} </li>
                    <li> Description: {candle.description} </li>
                    <li> Burn Time: {candle.details.burn_time} </li>
                </ol>)}
            </div>

        </div>
    );
}

export default ProductDetails;