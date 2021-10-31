import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo2 from '../../images/logo2.png';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = ({ variant, type }) => {

    const { user, logOut } = useAuth()



    const scrollWithOffset = (el,yOffset) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <div id="home" className="header-container container m-0 p-0 mx-auto">
            <Navbar fixed={type && "top"} className="container  py-2 pt-3 mx-auto" bg={variant == 'light' && 'light'} expand="lg" variant={variant}>
                <Container className="p-0 m-0">
                    <Navbar.Brand > <HashLink scroll={el => scrollWithOffset(el,0)} activestyle={{ color: "gold" }} to="/home#home"> <span className="d-flex"><img src={logo2} alt="" /><h4 className={variant == 'light' ? "text-dark logo-text":"text-white logo-text"}>FOOD <span className="color-text">EXPRESS</span></h4></span></HashLink></Navbar.Brand>
                    <Navbar.Toggle className="text-white" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className={`ms-auto px-0 ${variant == 'dark' ? 'nav-link-dark' : "nav-link-light"} my-0 my-lg-0`}
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <HashLink scroll={el => scrollWithOffset(el,0)} activestyle={{ color: "gold" }} to="/home#home">Home</HashLink>
                            <HashLink scroll={el => scrollWithOffset(el,-110)} to="/home#offers">Foods</HashLink>
                            <HashLink scroll={el => scrollWithOffset(el,-110)} to="/home#about">About</HashLink>
                            <NavLink activestyle={{ color: "gold" }} to="/myOrders">My Order</NavLink>

                            {
                                user?.displayName && <><NavLink activestyle={{ color: "gold" }} to="/allOrders">Manage All Orders</NavLink>
                                    <NavLink activestyle={{ color: "gold" }} to="/addOffer">Add An Items</NavLink></>
                            }

                            {!user?.displayName && <NavLink activestyle={{ color: "gold" }} to="/login"><i className="fas fa-user"></i> </NavLink>}
                            {user?.displayName && <a><span className="fw-bold text-warning">{user.displayName}</span><i onClick={() => logOut()} style={{ cursor: "pointer" }} className="fas text-warning fa-sign-out-alt"></i></a>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;