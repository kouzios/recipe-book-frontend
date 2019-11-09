import React, { Component } from 'react'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Message from '../components/Message.jsx';
import { errorHandling } from '../scripts/errorHandling.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      color: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    //TODO: Log out user on server
    window.localStorage.removeItem("auth");
  }

  /**
   * Logs the user in via a call to our api, passing in authentication 
   * stored using basicAuth (handled by axios when using auth);
   */
  login() {
    this.setState({
      message: ""
    });

    axios.post("/login", {}, {
      headers: {
        
      },
      auth: { //basicAuth
        username: this.state.username,
        password: this.state.password
      }
    }).then(res => {
      if(res.data === true) {
        //TODO: Use real auth token sent from server
        window.localStorage.setItem("auth", "dummy_login_token");
        window.location.href = "/";
      } else {
        this.setState({
          message: "Invalid credentials",
          color: "red"
        })
      }
    }).catch(err => {
      if(!errorHandling(err)) {
        this.setState({
          message: "Issue connecting to our servers, please try again later",
          color: "red"
        })
      }
    })
  }

  /**
   * When passed an event for an input section being changed, then change the state 
   * reflecting that value.
   * 
   * @param {*} event 
   */
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    }); 
  }

  render() {
    return (
      <Container>
        <h1 style={{color: "#f57505", textAlign: "center"}}>Login</h1>
        <Message color={this.state.color} message={this.state.message}/>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={this.state.username} onChange={this.handleChange} autoComplete="off"/>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={this.state.password} onChange={this.handleChange}/>
          </Form.Group>
          <div style = {{textAlign: "center"}}>
            <br />
            <Button style={{backgroundColor: "#f57505", width: "75px"}} onClick={this.login}>Login</Button>
          </div>
        </Form>
      </Container>
    );
  }
}
export default Login