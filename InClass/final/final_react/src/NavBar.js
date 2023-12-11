import React from 'react';
import logo from './candleLogo.png';
import {Navbar, Nav, Container} from "react-bootstrap";

function NavBar() {
    return (
        <div className="navBar">
            <Navbar data-bs-theme="dark">
                <Container>
                    <img className="NavImage" src={logo} alt='My logo'/>
                    <Nav>
                        <Nav.Link className="Nav-Item" href="/">Home</Nav.Link>
                        <Nav.Link className="Nav-Item" href="/products">Products</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;