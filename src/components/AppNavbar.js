import React from "react";

import { Navbar, Container } from "react-bootstrap";

export const AppNavbar = () => {
    
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    Products
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}