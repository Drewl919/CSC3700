import React from 'react';
import {Table} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import useFetch from "./useFetch";

function ProductsList(candles) {
    return (
        <div className="candles">
            <div className="titleProducts"> Our Top Products </div>
            <Table striped bordered>
                <thead>
                <tr>
                    <th> Item</th>
                    <th> Price </th>
                    <th> Details </th>
                </tr>
                </thead>
                <tbody>
                {candles.candles.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`${item.id}`}  state={{from: item.id}}> Details {item.id} </Link>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Outlet/>
        </div>
    );
}

export default ProductsList;