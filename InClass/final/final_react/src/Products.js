import React from 'react';
import useFetch from "./useFetch";
import ProductsList from "./ProductsList";

function Products() {
    let url = "http://localhost:8000/candles";
    const {data : candles, isPending, error} = useFetch( url )
    return (
        <div>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { candles && <ProductsList candles={candles}/>}
        </div>
    )
}

export default Products;