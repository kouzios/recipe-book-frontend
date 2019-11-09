import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/side.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

class Side extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.setVisible = this.setVisible.bind(this);
    }

    setVisible(visible) {
        this.setState({
            visible: visible
        })
    }

    render() {
        return (
            <Col>
                <Row className='fa-stack fa-2x'>
                    <FontAwesomeIcon
                        id='hamburgerCircle'
                        className='fa-stack-2x semi-transparent'
                        icon='circle'
                        hidden={this.state.visible}
                    />
                     <FontAwesomeIcon
                        className='fa-stack-1x clickable' 
                        icon='bars'
                        hidden={this.state.visible}
                        onClick={() => this.setVisible(true)}
                    />
                </Row>
                <Sidebar
                    as={Menu}
                    className='d-flex'
                    animation='overlay'
                    icon='labeled'
                    onHide={() => this.setVisible(false)}
                    vertical
                    visible={this.state.visible}
                    width='thin'
                >
                    <Link to='/'>
                        <Menu.Item className='d-flex justify-content-center'>
                            <Icon>
                                <Image className='small-logo' src="logo.png" rounded />
                            </Icon>
                            Home
                        </Menu.Item>
                    </Link>
                    
                    <div id='signout'>
                        <Link to='/login'>
                            <Menu.Item>
                                <Icon name='sign out alternate' />
                                Sign Out
                            </Menu.Item>
                        </Link>
                    </div>
                </Sidebar>
            </Col>
        );
  }
}

export default Side;