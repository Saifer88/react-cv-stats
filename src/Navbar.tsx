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
                            <NavbarLink refer="/" name="Home"/>
                            <NavbarLink refer="/about" name="About"/>
                        </Nav>
                    </Container>
                </Navbar></div>);
    }
}

interface NavbarLinkProps extends NavLinkProps {
    refer: To;
    name: String;
}

function NavbarLink(props: NavbarLinkProps){
    return (<Nav.Link as={Link} to={props.refer}>{props.name}</Nav.Link>)
}