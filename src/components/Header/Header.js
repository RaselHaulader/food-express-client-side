import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container container m-0 p-0 mx-auto">
            <Navbar className="container  py-2 pt-3 mx-auto" expand="lg" variant="dark">
                <Container className="p-0 m-0">
                    <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className="text-white" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto px-0 nav-link my-0 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">My Order</Nav.Link>
                            <Nav.Link href="#action2">All Orders</Nav.Link>
                            <Nav.Link href="#action2">Log In</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;