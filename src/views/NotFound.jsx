import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';

class NotFound extends Component {
    render() {
        return (
            <Container>
                <h1>Sorry, your page wasn't found!</h1>
                <span><Link to="/">Redirect to home</Link></span>
            </Container>
        );
    }
}
export default NotFound