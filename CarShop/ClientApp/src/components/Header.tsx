import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useIsAdmin } from "../api/auth";
import logodark from "../logo-dark.svg";

export const Header = () => {
    const { isAdmin } = useIsAdmin();
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img alt="logo" src={logodark} width="100" height="40" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Ogłoszenia
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            {isAdmin && (
                                <Nav.Link as={Link} to="/new-vehicle">
                                    Add New
                                </Nav.Link>
                            )}
                        </Nav>
                        <Nav>
                            {isAdmin ? <Nav.Link href="api/auth/logout" >Wyloguj</Nav.Link> :
                                <Nav.Link as={Link} to="/login" >Zaloguj</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
