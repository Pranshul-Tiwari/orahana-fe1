import React, { useState } from 'react';
import ologo from '../../assets/images/ologo.jpeg';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarTop = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <section className="navigation-wrapper d-flex align-items-center justify-content-center">
            <Navbar className="navigation justify-content-center justify-content-md-start" expand="sm">
                <a href="javascript:void(0);" className="navbar-brand">
                    <img src={ologo} alt="logo" />
                </a>
                <NavbarToggler className={isOpen ? 'navbar-opened':''} onClick={toggle}></NavbarToggler > 
                <Collapse isOpen={isOpen} navbar className="ml-auto justify-content-end">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="incart-wrapper" href="javascript:void(0);">
                                <i className="fa fa-search"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="javascript:void(0);">Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="javascript:void(0);">Our Story</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="javascript:void(0);">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="javascript:void(0);">Support</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="inuser-wrapper" href="javascript:void(0);">
                                <i className="fa fa-user"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="incart-wrapper" href="javascript:void(0);">
                                <i className="fa fa-shopping-cart"></i>
                                <small className="nav-incart">12</small>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </section>
    )
}

export default NavbarTop;
