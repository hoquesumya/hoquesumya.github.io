import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";


function NavbarCreartivity({}){

    return(
        <Navbar expand="xl" className={isLogin || isSignUp ? "navbar-logged-in" : "navbar-custom"} fixed="top">
           <Container fluid>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#">SH</Navbar.Brand>
            <Nav>
                <Nav.Link href="#about-section">About</Nav.Link>
                <Nav.Link href="#action2">Experience</Nav.Link>
                <Nav.Link href="#action2">Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarCreartivity  
