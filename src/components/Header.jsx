import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/header.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" className='d-flex justify-content-between'>
                <Link to="/">
                    <Image className='logo' src="logo.png" rounded />
                </Link>
                <Navbar>
                    <Link to="/login">
                        <Nav>
                            <Button className='recipe-button mt-2'>Sign in</Button>
                        </Nav>
                    </Link>
                </Navbar>
            </Navbar>
        )
    }
}

export default Header;