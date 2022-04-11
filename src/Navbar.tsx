import * as React from "react";
import { Navbar, Container, Nav, NavLinkProps } from "react-bootstrap";
import { Link, To } from "react-router-dom";


export default class NavbarComponent extends React.Component {

    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Covid-19 Stats</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavbarLink refer="/">Home</NavbarLink>
                            <NavbarLink refer="/national">Nazionale</NavbarLink>
                            <NavbarLink refer="/regional">Regionale</NavbarLink>
                            <NavbarLink refer="/vaccini">Vaccini</NavbarLink>
                            <NavbarLink refer="/about">Chi siamo?</NavbarLink>
                            <NavbarLink refer="/support">Sostienici</NavbarLink>
                        </Nav>
                    </Container>
                </Navbar></div>);
    }
}

interface NavbarLinkProps extends NavLinkProps {
    refer: To;
}

function NavbarLink(props: NavbarLinkProps){
    return (<Nav.Link as={Link} to={props.refer}>{props.children}</Nav.Link>)
}