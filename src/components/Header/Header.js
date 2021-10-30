import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo-dark.png';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = ({ variant }) => {
   
    const { user, logOut } = useAuth()
    return (
        <div  className="header-container container m-0 p-0 mx-auto">
            <Navbar className="container  py-2 pt-3 mx-auto" bg={variant == 'light' && 'light'} expand="lg" variant={variant}>
                <Container className="p-0 m-0">
                    <Navbar.Brand href="#"><img src={variant == 'dark' ? logo : logo2} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className="text-white" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className={`ms-auto px-0 ${variant == 'dark' ? 'nav-link-dark' : "nav-link-light"} my-0 my-lg-0`}
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink activeStyle={{ color: "gold" }} to="/home">Home</NavLink>
                            <HashLink to="/home#offers">Foods</HashLink>
                            <HashLink to="/home#about">About</HashLink>
                            <NavLink activeStyle={{ color: "gold" }} to="/myOrders">My Order</NavLink>

                            {
                              user?.displayName &&  <><NavLink activeStyle={{ color: "gold" }} to="/allOrders">Manage All Orders</NavLink>
                                    <NavLink activeStyle={{ color: "gold" }} to="/addOffer">Add An Offer</NavLink></>
                            }

                            {!user?.displayName && <NavLink activeStyle={{ color: "gold" }} to="/login"><i className="fas fa-user"></i> </NavLink>}
                            {user?.displayName && <a><span className="fw-bold">{user.displayName}</span><i onClick={() => logOut()} style={{ cursor: "pointer" }} className="fas fa-sign-out-alt"></i></a>}
                             
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;