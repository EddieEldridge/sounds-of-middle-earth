import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './../assets/scss/App.scss';

export const Navigation = (props: any) => {
    return (
        <Navbar fixed="top" id="bootstrapNavbar" bg="dark" variant="dark">
            <Container id="bootstrapNavBarContent">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                    <Nav.Link href="credits">Credits</Nav.Link>
                    <Nav.Link href="source">Source Code</Nav.Link>
                </Nav>
                <Navbar.Brand id="mainHeader" href="home">Sounds of Middle-earth</Navbar.Brand>
                <Nav>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="contribute">Contribute</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};