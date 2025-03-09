
import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, COURSES_PAGE_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom';
import './NavBar.css'; // Custom styles for NavBar
import logo from './logo.jpg'; // Logo image import

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    const goInterview = () => {
        window.location.href = "http://localhost:3005";
    };

    return (
        <Navbar expand="lg" variant="dark" className="navbar-custom">
            <Container>
                {/* Logo with link */}
                <NavLink to={COURSES_PAGE_ROUTE} className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {user.isAuth ? (
                        <Nav className="ml-auto">
                            <Button
                                style={{ marginRight: '10px' }}
                                variant="outline-light"
                                onClick={() => history.push(BASKET_ROUTE)}
                                className="nav-button"
                            >
                                Обрані курси
                            </Button>
                            <Button
                                variant="outline-light"
                                onClick={goInterview}
                                className="nav-button"
                            >
                                Симулятор інтерв'ю
                            </Button>
                            <Button
                                variant="outline-light"
                                onClick={() => history.push(ADMIN_ROUTE)}
                                className="nav-button"
                            >
                                Для викладача
                            </Button>
                            <Button
                                variant="outline-light"
                                onClick={logOut}
                                className="nav-button ml-2"
                            >
                                Вийти
                            </Button>
                        </Nav>
                    ) : (
                        <Nav className="ml-auto">
                            <Button
                                variant="outline-light"
                                onClick={() => history.push(LOGIN_ROUTE)}
                                className="nav-button"
                            >
                                Авторизація
                            </Button>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;
