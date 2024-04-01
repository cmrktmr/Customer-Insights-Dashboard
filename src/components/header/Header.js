// src/components/Header.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Customer Insights Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {user && (
                            <Nav.Link onClick={() => logout()} className='d-flex align-items-center'>
                                <FiLogOut />
                                Logout
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
