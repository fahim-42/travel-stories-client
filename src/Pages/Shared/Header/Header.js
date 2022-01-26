import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="transparent" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="text-dark fw-bold" as={Link} to="/home">Travel Stories</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-dark fw-bold" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={HashLink} to="/home#stories">Stories</Nav.Link>
                        {user.email &&
                            <Nav.Link className="text-dark fw-bold" as={HashLink} to="/dashboard">Dashboard</Nav.Link>}
                        {user.email ?
                            <Nav.Link className="text-dark fw-bold" as={HashLink} onClick={logout} to="/login">Logout</Nav.Link> :
                            <Nav.Link className="text-dark fw-bold" as={HashLink} to="/login">Login</Nav.Link>}

                        {user.email &&
                            <Navbar.Text className="text-warning fw-bold">
                                Hi, {user?.displayName}
                            </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;