import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router";
import NavThemeSwitch from '../NavThemeSwitch';

const PlainNavBar = () => {

    const loggedIn = false;

    const location = useLocation();

    return (
        <Navbar expand="md" bg="primary" className="mb-4" data-bs-theme="dark" data-bs-theme-static>
            <Container fluid>
                <Navbar.Brand href="./">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top icon-white"
                    />{' '}
                    <strong>SevLeague<sub>βeta</sub></strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto" activeKey={location.pathname}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/ranking">Ranking</Nav.Link>
                        <Nav.Link href="/contestset">Contests</Nav.Link>
                        <Nav.Link href="/problemset">Problems</Nav.Link>
                        {
                            loggedIn ? (
                                <Nav.Link href="./manage">Manage</Nav.Link>
                            ) : (
                                null
                            )
                        }
                    </Nav>
                    <Nav className="mr-auto">
                        {
                            loggedIn ? (
                                <Nav.Link>Feuergas</Nav.Link>
                            ) : (
                                <NavDropdown
                                    title="Log In"
                                    id="login-dropdown"
                                    align={{ md: 'end' }}
                                    data-bs-theme
                                >
                                    <Form className="px-4 py-3">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Sign in
                                        </Button>
                                    </Form>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>New around here? Sign up</NavDropdown.Item>
                                    <NavDropdown.Item>Forgot password?</NavDropdown.Item>
                                </NavDropdown>
                            )
                        }
                        <NavThemeSwitch />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const RouterNavBar = PlainNavBar;

export default RouterNavBar;