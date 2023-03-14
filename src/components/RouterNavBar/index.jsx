import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router";
import { Auth } from "../../Firebase";
import LoginForm from "../LoginForm";
import NavThemeSwitch from '../NavThemeSwitch';

const PlainNavBar = ({ user }) => {

    const loggedIn = false;

    const location = useLocation();

    const onLogout = async (e) => {
        await signOut(Auth);
        toast.success("You signed out");
    };

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
                    <strong>SevLeague<sub>αlpha</sub></strong>
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
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        {
                            user === null ? (
                                <LoginForm />
                            ) : (
                                <NavDropdown
                                    title={user.username}
                                    id="login-dropdown"
                                    align={{ md: 'end' }}
                                    data-bs-theme
                                >
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Item>Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={onLogout}>Sign out</NavDropdown.Item>
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