import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../img/529e2cc9c4f239a33a96a563d18f20ab.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import {Route } from "react-router-dom"
import Sliders_RGB from '../Sliders_RGB/Sliders_RGB';

function Navigation ({setMode}) {
    return (<div>
            <Navbar collapseOnSelect expand="md" bg='dark' variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src = {logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mr-auto">
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            </div>
        )
    
};

export default Navigation;