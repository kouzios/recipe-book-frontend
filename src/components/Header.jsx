import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Link to="/">
                    <Image className='logo' src="logo.png" rounded />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Link to="/login">
                        <Nav>
                            <Button className='abet-button mt-2'>Sign in</Button>
                        </Nav>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;