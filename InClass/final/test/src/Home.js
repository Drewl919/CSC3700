import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import candle from "./candle.png";
import {Link} from "react-router-dom";
import useFetch from "./useFetch";

function Home() {
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col sm={4}>
                        <img className="HomeImage" src={candle} alt="Burning candle"/>
                    </Col>
                    <Col sm={8}>
                        <div className="titleHome">Ye Old Candle Shoppe</div>
                        <p>
                            Buy from us and get a nice smelling candle! See all of our <Link to="/products">products</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;