import * as React from "react";
import { Navbar, Container, Nav, NavLinkProps, Dropdown, NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link, To } from "react-router-dom";
import { fetchData } from "./AsyncFunctions";

const regionalDataUrl = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';

interface NavbarComponentProps {
    regionalData;
}


export default class NavbarComponent extends React.Component<NavbarComponentProps> {

    constructor(props) {
        super(props);
    }

     renderRegionsDropdown() {
            return (<div>
                {this.props.regionalData.map((region, index) => <NavbarDropdownRegionLink key={region.denominazione_regione} regionData={region} index={index}></NavbarDropdownRegionLink>)}
                </div>)
     }


    render() {
        return (
            <div>
            <Navbar  bg="dark" fixed="top" variant="dark">
                    <Container >
                        <Navbar.Brand as={Link} to="/">Covid-19 Stats</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavbarLink refer="/">Home</NavbarLink>
                            <NavbarLink refer="/national">Italia</NavbarLink>
                            <NavDropdown menuVariant="dark"  title="Regioni" id="basic-nav-dropdown">
                                {this.props.regionalData && this.renderRegionsDropdown()}
                            </NavDropdown>   
                         
                            <NavbarLink refer="/vaccini">Vaccini</NavbarLink>
                        </Nav>
                        <Nav className="ms-auto">
                            <NavbarLink refer="/about">Chi siamo?</NavbarLink>
                        </Nav>
                    </Container>
                </Navbar></div>);
    }
}

interface NavbarLinkProps extends NavLinkProps {
    refer: To;
}

interface NavbarDropdownRegionLinkProps {
    regionData: any;
    index: Number;
}

function NavbarLink(props: NavbarLinkProps){
    return (<Nav.Link as={Link} to={props.refer}>{props.children}</Nav.Link>)
}

function NavbarDropdownRegionLink(props: NavbarDropdownRegionLinkProps) {
    return (<NavDropdown.Item className="navb" as={Link} to={"/regional/"+props.index}>{props.regionData.denominazione_regione}</NavDropdown.Item>)
}