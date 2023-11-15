import React, {useEffect, useState} from 'react';
// import Books from "./Books";
import {Col, Row} from "react-bootstrap";
import BookList from "./BookList";
import useFetch from "./useFetch";

function Home5(props) {
    const myTitle = "My Book List"
    let url = "http://localhost:8000/books";
    const {data: books, isPending, error } = useFetch(url);


    return (
        <div>
            <Row>
                <Col>
                    <h2> Books 4 U! OK</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    Books over there!!
                </Col>
                <Col >
                    {error && <div> Error: {error} </div>}
                    {isPending && <div> Loading... </div>}
                    {books && <BookList  books={books} title={myTitle} />}
                </Col>
            </Row>
        </div>
    );
}

export default Home5;