import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <Nav className='justify-content-end' activeKey='/'>
            <Nav.Item>
                <Nav.Link as={Link} to='/'> Home </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/about'> About </Nav.Link>
            </Nav.Item>

        </Nav>
    );
}

export default NavBar;